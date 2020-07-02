import {Request, Response} from "express"
import knex from "../database/connection"

class LivroController {
    async index(req: Request, res: Response) {
        const { limit = 5, page = 1 } = req.query

        try {
            const livros = await knex("livros")
                .limit(Number(limit))
                .offset((Number(page) - 1) * Number(limit))

            return res.json(livros)
        } catch (err) {
            return res.status(500).send()
        }
    }

    async create(req:Request, res:Response) {
        const {
            titulo,
            descricao,
            arquivo_url
        } = req.body

        const data = {
            titulo,
            descricao,
            arquivo_url
        }

        try{
            const newLivros = await knex("livros").insert(data);
            return res.json({newLivros});
        }
        catch(err) {
            return res.status(500).send();
        }
    }
}

export default new LivroController