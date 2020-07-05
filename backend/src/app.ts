import express from "express"
import cors from "cors"
import path from "path"

// Routes
import routes from "./routes"

const app = express()
app.use(cors())
app.use(express.json())

app.use("/uploads", express.static(path.resolve(__dirname, "..", "uploads")))

app.use(routes)

export default app