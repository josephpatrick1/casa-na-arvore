import { Request, Response } from "express"
import knex from "../database/connection"

class AmigosController {
    async index(req: Request, res: Response) {
        try {
            const Amigos = await knex("users_amigos")
                .innerJoin("users", function() {
                    this.on('users_amigos.user_id1', '=', 'users.id')
                    .orOn('users_amigos.user_id2', '=', 'users.id')

                })
                .andWhere(function() {
                    this.where('users_amigos.user_id1', "=", "2")
                    .orWhere('users_amigos.user_id2', "=", "2")
                })
                .andWhere(function() {
                    this.where('users.id', "!=", "2")
                })
                


                //.where("users_amigos.id","")
                .select("*")

            return res.json(Amigos)
        } catch (err) {
            return res.status(500).send()
        }
    }
}

export default new AmigosController