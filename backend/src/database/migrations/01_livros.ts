import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("livros", livros => {
        livros.increments("id").notNullable().primary()
        livros.string("titulo").notNullable()
        livros.string("descricao").notNullable()
        livros.string("arquivo_url").notNullable()
    })

}

export async function down(knex: Knex) {
    return knex.schema.dropTable("livros")
}