import { Request, Response } from "express"
import knex from "../database/connection"

import { GetConnection } from "../functions/getConnection"

interface iDataComment {
    nota: number
    comentario: string,
    spoiler: boolean,
    users_livros_id: number
}

interface iDataFavorite {
    users_livros_id: number
}


class ConnectionLivroControler {
    async favorite(req: Request, res: Response) {
        const { livroId } = req.params

        const data = {
            users_livros_id: 0
        }

        try {
            await GetConnection(Number(livroId), req.User_id, data as iDataFavorite)

            const idUsersLivrosFavorites = await knex("users_livros_favorites")
                .where({
                    users_livros_id: data.users_livros_id
                })
                .first() 
                .select("id")

            if (idUsersLivrosFavorites !== undefined) {
                await knex("users_livros_favorites")
                    .where({users_livros_id: data.users_livros_id})
                    .del()

                return res.json("Success delete")
            }

            const newFavorite = await knex("users_livros_favorites")
                .insert(data)

            return res.json(newFavorite)
        } catch (err) {
            return res.status(500).send()
        }
    }
    
    async comment(req: Request, res: Response) {
        const { livroId } = req.params

        const { 
            nota, 
            comentario, 
            spoiler 
        } = req.body

        const data = {
            nota, 
            comentario, 
            spoiler,
            users_livros_id: 0
        }

        try {

            await GetConnection(Number(livroId), req.User_id, data as iDataComment)

            const newComment = await knex("users_livros_avaliacoes")
            .insert(data)

            return res.json({newComment})
        } catch (err) {
            return res.status(500).send(err)
        }   
    }
}

export default new ConnectionLivroControler