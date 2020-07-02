import express from "express"
const routes = express.Router()

// Controllers
import UserController from "./controllers/userController"

routes.get("/", UserController.index)
routes.post("/create-user", UserController.create)

export default routes