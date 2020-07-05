import Knex from "knex"

export async function seed(knex: Knex) {
    return knex("users_livros_avaliacoes").insert([
        {
            users_livros_id: 1,
            comentario: "Um belo livro, gostei muito!",
            nota: 5,
            spoiler: false
        }
    ])
}