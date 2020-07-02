import Knex from "knex"

export async function seed (knex: Knex) {
    return knex("users").insert([{
        name: "Biel",
        foto_url:"biel.jpg",
        email: "biel@gmail.com",
        password: "123457",
        pontos: 0,
        nozes: 20
    },
    {
        name: "Rafael",
        foto_url:"rafael.jpg",
        email: "rafael@gmail.com",
        password: "123457",
        pontos: 0,
        nozes: 20
    }])
}