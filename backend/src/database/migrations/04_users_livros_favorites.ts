import Knex from "knex"

export async function up(knex:Knex) {
    return knex.schema.createTable("users_livros_favorites", table => {
        table.increments("id").notNullable().primary()

        table.integer("users_livros_id")
            .references("id")
            .inTable("users_livros");
    })
}

export async function down(knex:Knex) {
    return knex.schema.dropTable("users_livros_favorites")
}