import Knex from "knex"

export async function seed(knex: Knex) {
    return knex("users_livros_favorites").insert([
        {
            users_livros_id: 1
        }
    ])
}