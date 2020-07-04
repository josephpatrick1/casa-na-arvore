import Knex from "knex"

export async function seed(knex: Knex) {
    return knex("categorias").insert([
        {
            categoria: "1 Ficcao cientifica"
        },
        {
            categoria: "2 Acao"
        },
        {
            categoria: "3 Aventura"
        },
        {
            categoria: "4 Drama"
        }
    ])
}