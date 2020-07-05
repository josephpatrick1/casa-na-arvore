import Knex from "knex"

export async function seed(knex: Knex) {
    return knex("elos").insert([
        {
            nivel: 0,
            image_url: "bronze.svg"
        },
        {
            nivel: 10,
            image_url: "prata.svg"
        },
        {
            nivel: 20,
            image_url: "ouro.svg"
        },
        {
            nivel: 30,
            image_url: "platina.svg"
        },
        {
            nivel: 40,
            image_url: "diamante.svg"
        }
    ])
}