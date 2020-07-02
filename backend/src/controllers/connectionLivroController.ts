import { Request, Response } from "express"
import knex from "../database/connection"

class ConnectionLivroControler {
    async favorite(req: Request, res: Response) {

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
            const userLivroID = await knex("users_livros")
                .where({
                    user_id: req.User_id,
                    livros_id: Number(livroId)
                })
                .first()
                .select("id")

            if (userLivroID === undefined) {
                console.log("aqui")

                const connection = await knex("users_livros")
                    .insert({
                        livros_id: livroId,
                        user_id: Number(req.User_id)
                    })

                data.users_livros_id = Number(connection[0])
            } else {
                console.log("ou aqui")
                data.users_livros_id = userLivroID.id
            }
        
            console.log("Teste3")
            console.log(data)

            const newComment = await knex("users_livros_avaliacoes")
                .insert(data)

            return res.json({newComment})
        } catch (err) {
            return res.status(500).send(err)
        }   
    }
}

export default new ConnectionLivroControler