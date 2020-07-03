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

export async function VerifyAndSign(User: iUser, password: string) {
    try {
        const isPasswordCorrect = await bcrypt.compare(password, User.password)

        if (!isPasswordCorrect)
            return false
        
        const token = jwt.sign(
            {User_id: User.id},
            String(process.env.APP_SECRET),
            {expiresIn: "4h"}
        )
    
        return token
    } catch (err) {
        return false
    }
}

class SessionController {
    async signin(req: Request, res: Response) {
        const { email, password } = req.body

        try {
            const User: iUser = await knex("users")
                .where({email})
                .first()

            if (User === undefined)
                return res.status(400).json("Cannot find a user with this email")

            const Token = await VerifyAndSign(User, password)

            if (!Token) 
                return res.status(401).json("Wrong password")

            return res.json(Token)
        } catch (err) {
            return res.status(500).send()
        }
    }
}  

export default new SessionController