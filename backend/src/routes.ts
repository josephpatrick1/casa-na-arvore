import express from "express"
const routes = express.Router()

// Controllers
import UserController from "./controllers/userController"
import LivroController from "./controllers/livroController"

routes.get("/", UserController.index)
routes.post("/create-user", UserController.create)

routes.get("/livros", LivroController.index)
routes.post("/create-livro", LivroController.create);




export default routes