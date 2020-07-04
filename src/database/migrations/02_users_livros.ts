import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("users_livros", table => {
        table.increments("id").notNullable().primary()

        table.integer("user_id")
            .notNullable()
            .references("id")
            .inTable("users")
        
        table.integer("livros_id")
            .notNullable()
            .references("id")
            .inTable("livros")
    })
}
export async function down(knex: Knex) {
    return knex.schema.dropTable("users_livros");
}