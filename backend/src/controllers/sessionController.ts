import { Request, Response } from "express"
import knex from "../database/connection"
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import "dotenv/config"

export interface iUser {
    password: string,
    name: string,
    email: string,
    id: number
}

class SessionController {
    async login(req: Request, res: Response) {
        const { email, password } = req.body

        try {
            const User: iUser = await knex("users")
                .where({email})
                .first()

            if (User === undefined)
                return res.status(400).json("Cannot find a user with this email")

            const isPasswordCorrect = await bcrypt.compare(password, User.password)

            if (!isPasswordCorrect)
                return res.status(401).json("Wrong password")
            
            const token = jwt.sign(
                {User_id: User.id},
                String(process.env.APP_SECRET),
                {expiresIn: "4h"}
            )

            return res.json({token})
        } catch (err) {
            return res.status(500).send()
        }
    }
}  

export default new SessionController