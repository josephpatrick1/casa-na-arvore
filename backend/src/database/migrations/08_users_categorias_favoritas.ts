import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("users_categorias_favoritas", table => {
        table.increments("id").notNullable().primary()

        table.integer("user_id")
            .notNullable()
            .references("id")
            .inTable("users")

        table.integer("categoria_id")
            .notNullable()
            .references("id")
            .inTable("categorias")
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable("users_categorias_favoritas")
}