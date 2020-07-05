import { Request, Response } from "express"
import bcrypt from "bcryptjs"

import knex from "../database/connection"

import { VerifyAndSign } from "../functions/VerifyAndSign"
import { group } from "../functions/group"
import { whatNivel } from "../functions/whatNivel"


class UserController {
    async index(req: Request, res: Response) {
        const { page = 1, limit = 5 } = req.query

        try {
            const users = await knex("users")
                .limit(Number(limit))
                .offset((Number(page) - 1) * Number(limit))
            return res.json(users)
        } catch (err) {
            return res.status(500).send()
        }
    }

    async create(req: Request, res: Response) {
        const {
            name,
            email,
            password
        } = req.body

        const data = {
            name,
            foto_url: "https://a-static.mlcdn.com.br/1500x1500/livro-o-pequeno-principe/bookmarket/127036/7ad933c8b51d77690e51fd55b80b0211.jpg",
            email,
            password,
            pontos: 0,
            nozes: 20
        }

        try {
            const isEmailValid = await knex("users")
                .where({email})
                .first() === undefined

            if (!isEmailValid)
                return res.status(400).send("Email já está sendo")

            if (!/@/.test(email))
                return res.status(400).send("Email inválido")

            
            const hash = await bcrypt.hash(password, 10)
            data.password = hash

            const newUserId = await knex("users").insert(data)

            const newUser = await knex("users")
                .where({id: newUserId})
                .first()

            const Token = await VerifyAndSign(newUser, password)

            if (!Token)
                return  res.status(401).send()

            return res.json({Token})
        } catch (err) {
            return res.status(500).send()
        }
    }

    async categoriasFavoritas(req: Request, res: Response) {
        const { categorias } = req.body
        try {

            const UCF = categorias.map((categoriaId: number)  => {
                return {
                    "user_id": req.User_id,
                    "categoria_id": categoriaId
                }
            })
                
            const NUCF = await knex("users_categorias_favoritas")
                .insert(UCF,["user_id","categoria_id"])


            return res.json("Success")
        } catch (err) {
            return res.status(500).send()
        }
    }

    async indexUserData(req: Request, res: Response) {
        try {
            const Data = await knex("livros_categorias")
                .innerJoin("livros", "livros.id", "=", "livros_categorias.livro_id")
                .innerJoin("categorias","categorias.id", "=", "livros_categorias.categoria_id")
                .innerJoin("users_categorias_favoritas","users_categorias_favoritas.categoria_id", "=", "categorias.id")

                .where("users_categorias_favoritas.user_id", req.User_id)

                .groupBy(["categorias.id", "livros.id"])

                .orderBy("categorias.categoria", "livros.titulo")

                .select("categorias.categoria as Categoria", "livros.titulo as Titulo", "livros.arquivo_url as Capa")

            // Livros das categorias que ele gosta em arrays diferentes
            const DataGroup = await group(Data, "Categoria")

                
            const ResData = []

            for (let categoria in DataGroup) {

                ResData.push({"categoria":categoria, "livros":(DataGroup[categoria])})

            }

            return res.json({"categorias":ResData})
        } catch (err) {
            return res.status(500).send()
        }
    }

    async showUser(req: Request, res: Response) {
        try {
            const User = await knex("users")
                .where({id: req.User_id})
                .first()
                .select("users.name", "users.pontos as xp", "users.foto_url", "users.descricao", "users.nozes")
                
            if (!User)
                return res.send(401).send()
                
            const [Nivel, elo] = await whatNivel((User as any).xp)

            const UserAmigos = await knex("users_amigos")
                .innerJoin("users", function() {
                    this.on('users_amigos.user_id1', '=', 'users.id')
                    .orOn('users_amigos.user_id2', '=', 'users.id')

                })
                .andWhere(function() {
                    this.where('users_amigos.user_id1', "=", req.User_id)
                    .orWhere('users_amigos.user_id2', "=", req.User_id)
                })
                .andWhere(function() {
                    this.where('users.id', "!=", req.User_id)
                })
                .select("users.id", "users.name", "users.foto_url")

            const UserComments = await knex("users_livros_avaliacoes")
                .join("users_livros","users_livros.id","=","users_livros_avaliacoes.users_livros_id")
                .join("users","users.id","=","users_livros.user_id")
                .join("livros", "livros.id", "=", "users_livros.id")
                .select("users_livros_avaliacoes.comentario", "users_livros_avaliacoes.nota", "livros.arquivo_url", "livros.titulo")
                .where("users.id", req.User_id)
            
            const Response = {
                "User": {...User, Nivel, elos: elo},
                "Amigos": UserAmigos,
                "Comments": UserComments
            }

            return res.json(Response)
        } catch (err) {
            return res.status(500).send()
        }
    }
}

export default new  UserController

