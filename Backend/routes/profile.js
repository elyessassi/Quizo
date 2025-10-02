import express from "express"
import { VerifyAccessToken } from "./secretToken.js"
import User from "../models/User.js"


let ProfileRoute = express.Router()

ProfileRoute.get("/profile", VerifyAccessToken, async (req, res) => {
    let user = await User.findById(req.id)
    res.status(200).send(user)
    
})

export default ProfileRoute