import Knex from "knex"

export async function seed(knex: Knex) {
    return knex("livros_categorias").insert([
        {
            livro_id: 1,
            categoria_id: 1
        },
        {
            livro_id: 2,
            categoria_id: 1
        },
        {
            livro_id: 3,
            categoria_id: 2
        },
        {
            livro_id: 3,
            categoria_id: 3
        },
        {
            livro_id: 4,
            categoria_id: 3
        },
        {
            livro_id: 4,
            categoria_id: 2
        },
        {
            livro_id: 5,
            categoria_id: 1
        },
        {
            livro_id: 6,
            categoria_id: 1
        },
        {
            livro_id: 7,
            categoria_id: 1
        },
        {
            livro_id: 8,
            categoria_id: 1
        }
    ])
}