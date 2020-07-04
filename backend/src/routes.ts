import express from "express"
const routes = express.Router()

// Middlewares
import Auth from "./middleware/auth"

// Controllers
import UserController from "./controllers/userController"
import LivroController from "./controllers/livroController"
import sessionController from "./controllers/sessionController"
import ConnectionLivroController from "./controllers/connectionLivroController"
import CommentsController from "./controllers/commentsController"
import AmigosController from "./controllers/amigosController"


// Fazer login ou criar conta
routes.post("/create-user", UserController.create)
// routes.post("/create-livro", LivroController.create);
routes.post("/login", sessionController.signin)

routes.use(Auth) // Rotas autenticadas

routes.get("/test", (_, res) => res.send("Ok")) 

routes.post("/comment/:livroId", ConnectionLivroController.comment)

routes.post("/favorite/:livroId", ConnectionLivroController.favorite)

routes.get("/comments/user", CommentsController.CommentsUser)

routes.get("/livros", LivroController.index)

routes.get("/", UserController.index)

routes.get("/comments/livros/:livroId", CommentsController.CommentsLivro)

routes.get("/amigos", AmigosController.index)

routes.post("/user-categorias-favoritas", UserController.categoriasFavoritas)

routes.get("/user-home", UserController.indexUserData)

export default routes