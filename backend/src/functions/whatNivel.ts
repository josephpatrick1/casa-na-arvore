import knex from "../database/connection"

export const whatNivel = async (xp: number) => {
    const Nivel = Math.floor(xp / 1000)

    const elos: any = await knex("elos") 
        .whereBetween("nivel", [Nivel, Nivel+9]) // 
        .first()
        .select("elos.image_url")

    return [Nivel, elos.image_url]
} 