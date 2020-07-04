import Knex from "knex"

export async function seed (knex: Knex) {
    return knex("users").insert([{
        name: "Biel",
        foto_url:"biel.jpg",
        email: "biel@gmail.com",
        password: "$2a$10$ef5VQs5CQSOirJUXcwLNJe4dTJgHuojV5mG09onrl3ehE.He3nmUW",
        pontos: 0,
        nozes: 20
    },
    {
        name: "Rafael",
        foto_url:"rafael.jpg",
        email: "rafael@gmail.com",
        password: "$2a$10$ef5VQs5CQSOirJUXcwLNJe4dTJgHuojV5mG09onrl3ehE.He3nmUW",
        pontos: 0,
        nozes: 20
    }])
}