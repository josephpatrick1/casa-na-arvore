import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import "dotenv/config"

declare module "express-serve-static-core" {
    interface Request {
        User_id: number
    }
}

export default async function Auth(req: Request, res: Response, next: NextFunction) {
    const auth = req.headers.authorization

    if (!auth)
        return res.status(401).json("Auth token not provided")

    const authSplited = auth.split(" ")

    if (authSplited.length !== 2)
        return res.status(401).json("Invalid token")

    const [scheme, token] = authSplited

    if (!/^Bearer$/i.test(scheme))
        return res.status(401).json("Invalid token")

    try {
        const payload: any = jwt.verify(token, String(process.env.APP_SECRET))

        if (payload === undefined)
            return res.status(401).json("Invalid token")
        
        req.User_id = payload.User_id
        next()
    } catch (err) {
        res.status(401).json("Token invalid")
    }
}