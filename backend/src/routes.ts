import { celebrate } from "celebrate";
import express from "express";
const routes = express.Router();

// Middlewares
import Auth from "./middleware/auth";

//Validators
import validators from "./validators";

// Controllers
import UserController from "./controllers/userController";
const userValidator = validators.userValidation;

import LivroController from "./controllers/livroController";
const livroValidator = validators.livroValidation;

import sessionController from "./controllers/sessionController";
const sesionValidator = validators.signinValidation;

import ConnectionLivroController from "./controllers/connectionLivroController";
const connectionLivroValidator = validators.connectionLivroValidation;

import CommentsController from "./controllers/commentsController";
const commentsValidator = validators.commentsValidation;

import AmigosController from "./controllers/amigosController";

// Fazer login ou criar conta
routes.post(
  "/create-user",
  celebrate(userValidator.create),
  UserController.create
);
// routes.post("/create-livro", LivroController.create);
routes.post("/login", celebrate(sesionValidator), sessionController.signin);

routes.use(Auth); // Rotas autenticadas

routes.get("/test", (_, res) => res.send("Ok"));

routes.post(
  "/comment/:livroId",
  celebrate(connectionLivroValidator.comment),
  ConnectionLivroController.comment
);

routes.post(
  "/favorite/:livroId",
  celebrate(connectionLivroValidator.favorite),
  ConnectionLivroController.favorite
);

routes.get("/comments/user", CommentsController.CommentsUser);

routes.get("/livros", celebrate(livroValidator.index), LivroController.index);

routes.get("/users", celebrate(userValidator.index), UserController.index);

routes.get("/user", UserController.showUser);

routes.get(
  "/comments/livros/:livroId",
  celebrate(commentsValidator.CommentsLivro),
  CommentsController.CommentsLivro
);

routes.get("/amigos", AmigosController.index);

routes.post(
  "/user-categorias-favoritas",
  celebrate(userValidator.categoriasFavoritas),
  UserController.categoriasFavoritas
);

routes.get("/user-home", UserController.indexUserData);

export default routes;
