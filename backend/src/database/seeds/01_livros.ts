import Knex from "knex"

export async function seed(knex: Knex) {
    return knex("livros").insert([
        {
            titulo: "O Pequeno Príncipe",
            descricao: "O Pequeno Príncipe é uma obra literária do escritor francês Antoine de Saint-Exupéry, que conta a história da amizade entre um homem frustrado por ninguém compreender os seus desenhos, com um principezinho que habita um asteroide no espaço.",
            arquivo_url: "opequenoprincipe.jpg",
            autor: "Antoine de Saint-Exupéry",
            editora: "Gallimard"
        },
        {
            titulo: "Livro 2",
            descricao: "HAHAHAHA",
            arquivo_url: "capa.jpg",
            autor: "O autor do livro 2",
            editora: "editora 2"
        },
        {
            titulo: "Livro 3",
            descricao: "HAHA",
            arquivo_url: "imagem.jpg",
            autor: "O autor do livro 3",
            editora: "editora 3"
        },
        {
            titulo: "Livro 4",
            descricao: "HAHA",
            arquivo_url: "imagem.jpg",
            autor: "O autor do livro 4",
            editora: "editora 4"
        },
        {
            titulo: "Livro 5",
            descricao: "HAHA",
            arquivo_url: "imagem.jpg",
            autor: "O autor do livro 5",
            editora: "editora 5"
        },
        {
            titulo: "Livro 6",
            descricao: "HAHA",
            arquivo_url: "imagem.jpg",
            autor: "O autor do livro 6",
            editora: "editora 6"
        },
        {
            titulo: "Livro 7",
            descricao: "HAHA",
            arquivo_url: "imagem.jpg",
            autor: "O autor do livro 7",
            editora: "editora 7"
        },
        {
            titulo: "Livro 8",
            descricao: "HAHA",
            arquivo_url: "imagem.jpg",
            autor: "O autor do livro 8",
            editora: "editora 8"
        }
    ])
}