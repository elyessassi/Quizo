import express from "express"
import { VerifyAccessToken } from "./secretToken.js"

let ProfileRoute = express.Router()

ProfileRoute.post("/profile", VerifyAccessToken, (req, res) => {
    console.log(req.id)
    res.status(200).send(req.id)
})

export default ProfileRoute