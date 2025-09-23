import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export function CreateAccessToken(id) {
    let token = jwt.sign({id}, process.env.ACCESS_TOKEN_SECRET)
    return (token)
}

export function VerifyAccessToken(req, res, next) {
    let authHeader = req.headers["authorization"]
    if (authHeader == null){
        res.status(401).send({success: false})
        return
    }
    let token = authHeader.split(" ")[1]
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, id) => {
        if (err){
            console.log(err)
            res.status(401).send({success: false})
            return
        }
        req.id = id
        next()
    })
}
