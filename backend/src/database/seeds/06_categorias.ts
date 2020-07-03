import Knex from "knex"

export async function seed(knex: Knex) {
    return knex("categorias").insert([
        {
            categoria: "Ficção científica"
        },
        {
            categoria: "Ação"
        }
    ])
}