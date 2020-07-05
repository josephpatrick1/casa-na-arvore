import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("elos", table => {
        table.increments("id").notNullable().primary()

        table.integer("nivel").notNullable()
        table.integer("image_url").notNullable()
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable("elos")
}