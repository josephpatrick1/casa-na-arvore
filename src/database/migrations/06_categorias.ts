import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("categorias", table => {
        table.increments("id").notNullable().primary()
        table.string("categoria").notNullable()
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable("categorias")
}