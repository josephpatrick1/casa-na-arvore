import Knex from "knex"

export async function seed(knex: Knex) {
    return knex("livros_categorias").insert([
        {
            livro_id: 1,
            categoria_id: 1
        },
        {
            livro_id: 2,
            categoria_id: 2
        }
    ])
}