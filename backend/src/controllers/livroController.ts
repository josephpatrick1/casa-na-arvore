import {Request, Response} from "express"
import knex from "../database/connection"

class LivroController {
    async index(req: Request, res: Response) {
        const { limit = 5, page = 1, autor, editora, categoria, titulo } = req.query
        try {
            let Livros = knex("livros")
                .select("livros.id as LivroID","categorias.categoria as Categoria", "livros.titulo as Titulo", "livros.arquivo_url as Capa")
                .join("livros_categorias","livros_categorias.livro_id","=","livros.id")
                .join("categorias","categorias.id","=","livros_categorias.categoria_id")
                .groupBy("livros.id")
                .limit(Number(limit))
                .offset((Number(page) - 1) * Number(limit))

            if (req.query.titulo) {
                Livros = Livros.where("livros.titulo", "LIKE", String(`%${titulo}%`))
            }

            if (req.query.autor) {
                Livros = Livros.where({autor: String(autor)})
            }            

            if (req.query.editora) {
                Livros = Livros.where({editora})
            }
            
            if (req.query.categoria) {

                // Get categoria id
                const CatId = await knex("categorias")
                    .where({categoria: String(categoria)})
                    .select("id")
                
                Livros = Livros
                    .where({categoria_id: CatId[0].id})
            }

            Livros.then(function(result) {
                return res.json(result)
            })
        } catch (err) {
            return res.status(500).send()
        }
    }

    async create(req:Request, res:Response) {
        const {
            titulo,
            descricao,
            arquivo_url
        } = req.body

        const data = {
            titulo,
            descricao,
            arquivo_url
        }

        try{
            const newLivros = await knex("livros").insert(data);
            return res.json({newLivros});
        }
        catch(err) {
            return res.status(500).send();
        }
    }
}

export default new LivroController