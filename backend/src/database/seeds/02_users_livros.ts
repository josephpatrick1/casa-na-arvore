import Knex from "knex"

export async function seed(knex: Knex) {
    return knex("users_livros").insert([
        {
            user_id: 1,
            livros_id: 1
        }
    ])
}