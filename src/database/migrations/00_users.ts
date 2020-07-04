import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("users", table => {
        table.increments("id").notNullable().primary()
        table.string("name").notNullable()
        table.string("foto_url").notNullable()
        table.string("email").unique().notNullable()
        table.string("password").notNullable()
        table.integer("pontos").notNullable()
        table.integer("nozes").notNullable()
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable("users")
}