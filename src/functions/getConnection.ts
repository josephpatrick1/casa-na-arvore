import knex from "../database/connection"

interface iDataObject {
    nota?: number
    comentario?: string,
    spoiler?: boolean,
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