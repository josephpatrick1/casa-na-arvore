import Knex from "knex"

export async function seed (knex: Knex) {
    return knex("users").insert([
        {
            name: "Tadeu",
            foto_url:"tadeu.jpg",
            email: "tadeu@gmail.com",
            password: "$2a$10$ef5VQs5CQSOirJUXcwLNJe4dTJgHuojV5mG09onrl3ehE.He3nmUW", // 123456
            pontos: 3500,
            nozes: 20,
            descricao: "Apaixonado por nozes"
        },
        {
            name: "Rafael",
            foto_url:"rafael.jpg",
            email: "rafael@gmail.com",
            password: "$2a$10$ef5VQs5CQSOirJUXcwLNJe4dTJgHuojV5mG09onrl3ehE.He3nmUW",
            pontos: 40400,
            nozes: 20,
            descricao: "Gosto de ler"
        },
        {
            name: "Joseph",
            foto_url:"Joseph.jpg",
            email: "Joseph@gmail.com",
            password: "$2a$10$ef5VQs5CQSOirJUXcwLNJe4dTJgHuojV5mG09onrl3ehE.He3nmUW", // 123456
            pontos: 24600,
            nozes: 20,
            descricao: "Sei lá Irmão"
        },
        {
            name: "Illyana",
            foto_url:"Illyana.jpg",
            email: "Illyana@gmail.com",
            password: "$2a$10$ef5VQs5CQSOirJUXcwLNJe4dTJgHuojV5mG09onrl3ehE.He3nmUW", // 123456
            pontos: 14600,
            nozes: 20,
            descricao: "Muito legal essa live"
        },
        {
            name: "Jaquetinha",
            foto_url:"Jaquetinha.jpg",
            email: "Jaquetinha@gmail.com",
            password: "$2a$10$ef5VQs5CQSOirJUXcwLNJe4dTJgHuojV5mG09onrl3ehE.He3nmUW", // 123456
            pontos: 34600,
            nozes: 20,
            descricao: "entra ae"
        }
    ])
}