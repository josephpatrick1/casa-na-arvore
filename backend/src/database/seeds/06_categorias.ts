import Knex from "knex"

export async function seed(knex: Knex) {
    return knex("categorias").insert([
        {
            categoria: "Ficcao cientifica" // 1
        },
        {
            categoria: "Acao" // 2
        },
        {
            categoria: "Aventura" // 3
        },
        {
            categoria: "Suspense" //4
        },
        {
            categoria: "infanto-juvenil" // 5
        },
        {
            categoria: "Ficção gay" //6
        },
        {
            categoria: "Mitologia grega" //7
        },
        {
            categoria: "Romance" // 8
        }
    ])
}