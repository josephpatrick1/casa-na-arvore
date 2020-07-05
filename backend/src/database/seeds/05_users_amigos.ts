import Knex from "knex"

export async function seed(knex: Knex) {
    return knex("users_amigos").insert([
        {
            user_id1: 1,
            user_id2: 2
        },
        {
            user_id1: 1,
            user_id2: 2
        },
        {
            user_id1: 1,
            user_id2: 3
        },
        {
            user_id1: 1,
            user_id2: 4
        },
        {
            user_id1: 1,
            user_id2: 5
        }
    ])
}