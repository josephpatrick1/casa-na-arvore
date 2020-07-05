import Knex from "knex"

export async function seed(knex: Knex) {
    return knex("livros_categorias").insert([
        {
            livro_id: 1, // Pequeno principe
            categoria_id: 5
        },
        {
            livro_id: 2, // De mal a pior
            categoria_id: 6
        },
        {
            livro_id: 3, // Palavras Em Azul Profundo
            categoria_id: 5
        },
        {
            livro_id: 4, // O Herói Perdido 
            categoria_id: 3
        },
        {
            livro_id: 5, // O Oráculo Oculto
            categoria_id: 6
        },
        {
            livro_id: 5, // O Oráculo Oculto
            categoria_id: 5
        },
        {
            livro_id: 6, // À Beira da Eternidade
            categoria_id: 1
        },
        {
            livro_id: 6,
            categoria_id: 4
        },
        {
            livro_id: 6,
            categoria_id: 7
        }
    ])
}