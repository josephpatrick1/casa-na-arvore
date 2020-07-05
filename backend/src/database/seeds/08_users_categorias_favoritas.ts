import Knex from "knex"

export async function seed(knex: Knex) {
    return knex("users_categorias_favoritas").insert([
        {
            user_id: 1,
            categoria_id: 6
        },
        {
            user_id: 2,
            categoria_id: 1
        },
        {
            user_id: 3,
            categoria_id: 5
        },
        {
            user_id: 3,
            categoria_id: 1
        },
        {
            user_id: 1,
            categoria_id: 1
        },
        {
            user_id: 1,
            categoria_id: 6
        },
        {
            user_id: 4,
            categoria_id: 4
        },
        {
            user_id: 4,
            categoria_id: 7
        },
        {
            user_id: 5,
            categoria_id: 3
        },
        {
            user_id: 5,
            categoria_id: 1
        }
    ])
}