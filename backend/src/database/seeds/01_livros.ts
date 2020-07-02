import Knex from "knex"

export async function seed(knex: Knex) {
    return knex("livros").insert([
        {
            titulo: "O Pequeno Príncipe",
            descricao: "Descrição do Pequeno Príncipe",
            arquivo_url: "https://lojasaraiva.vteximg.com.br/arquivos/ids/12054945/1002909425.jpg?v=637141927089070000"
        },
        {
            titulo: "Livro 2",
            descricao: "HAHAHAHA",
            arquivo_url: "https://lojasaraiva.vteximg.com.br/arquivos/ids/12054945/1002909425.jpg?v=637141927089070000"
        }
    ])
}