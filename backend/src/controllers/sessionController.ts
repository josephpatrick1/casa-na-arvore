import { Request, Response } from "express"
import knex from "../database/connection"
import "dotenv/config"

import { iUser, VerifyAndSign } from "../functions/VerifyAndSign"


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