import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("users_livros_avaliacoes", table => {
        table.increments("id").notNullable().primary()
        table.integer("users_livros_id")
            .notNullable()
            .references("id")
            .inTable("users_livros")

        table.string("comentario")
        table.integer("nota", 1).notNullable()
        table.boolean("spoiler").notNullable()
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable("users_livros_avaliacoes")
}