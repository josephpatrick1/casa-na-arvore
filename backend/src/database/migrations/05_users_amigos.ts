import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("users_amigos", table => {
        table.increments("id").notNullable().primary()
        
        table.integer("user_id1")
            .references("id")
            .inTable("users")

        table.integer("user_id2")
            .references("id")
            .inTable("users")
    })
}
export async function down(knex: Knex) {
    return knex.schema.dropTable("users_amigos");
}