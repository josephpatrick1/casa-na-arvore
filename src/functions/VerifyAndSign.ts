import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

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