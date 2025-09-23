import express from "express"
import User from "../models/User.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import {CreateAccessToken} from './secretToken.js'

dotenv.config()


let loginRoute = express.Router()

loginRoute.post("/login", async (req, res) => {
    let {email, password} = req.body
    if (email == ""){
        res.status(400).json({success: false, message: "Enter your Email"})
        return
    }
    if (password == ""){
        res.status(400).json({success: false, message: "Enter your Password"})
        return
    }
    let user = await User.findOne({email: email})
    if (user != null){
        if ((await bcrypt.compare(password, user.password)) == false){
            res.status(401).json({success: false, message: "Wrong Password"})
            return
        }
        else{
            res.status(200).json({success: true, accessToken: CreateAccessToken(user.id)})
        }
    }
    else{
        res.status(404).json({success: false, message: "User does not exist"})
        return
    }
})



export default loginRoute
