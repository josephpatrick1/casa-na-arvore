import Knex from "knex"

export async function up(knex: Knex) {
    return knex.schema.createTable("livros_categorias", table => {
        table.increments("id").notNullable().primary()
        
        table.integer("livro_id")
            .references("id")
            .inTable("livros")

        table.integer("categoria_id")
            .references("id")
            .inTable("categorias")
    })
}

export async function down(knex: Knex) {
    return knex.schema.dropTable("livros_categorias")
}