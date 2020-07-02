import { Request, Response } from "express"
import knex from "../database/connection"

interface iDataObject {
    nota?: number
    comentario?: string,
    spoiler?: boolean,
    users_livros_id: number
}

interface iDataComment {
    nota: number
    comentario: string,
    spoiler: boolean,
    users_livros_id: number
}

interface iDataFavorite {
    users_livros_id: number
}


export async function GetConnection(livroId: number, User_id: number, data: iDataObject) {
    const userLivroID = await knex("users_livros")
    .where({
        user_id: User_id,
        livros_id: Number(livroId)
    })
    .first()
    .select("id")

    if (userLivroID === undefined) {

        const connection = await knex("users_livros")
            .insert({
                livros_id: livroId,
                user_id: Number(User_id)
            })

        return data.users_livros_id = Number(connection[0])
    } else {
        return data.users_livros_id = userLivroID.id
    }
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