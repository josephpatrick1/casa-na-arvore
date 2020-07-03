import Knex from "knex"

export async function seed(knex: Knex) {
    return knex("users_categorias_favoritas").insert([
        {
            user_id: 1,
            categoria_id: 1
        },
        {
            user_id: 2,
            categoria_id: 2
        }
    ])
}