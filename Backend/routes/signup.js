import express from "express"
import User from "../models/User.js"
import { CreateAccessToken } from "./secretToken.js"


let signupRoute = express.Router()

signupRoute.post("/signup", async (req, res) => {
    let {email, password, username, confirmPassword} = req.body
    let check = await HandleUsername(username)
    if (check != true) {
        res.status(check.status).json({success:check.success, message:check.message})
        return
    }
    check = await HandleEmail(email)
    if ( check != true){
        res.status(check.status).json(check.message)
        return
    }
    check = HandlePassword(password, confirmPassword)
    if (check != true){
        res.status(check.status).json(check.message)
        return
    }
    let newUser = new User({email, password, username})
    newUser.save()
    let token = CreateAccessToken(newUser.id)
    res.status(200).json({success: true, accessToken: token})
})

export default signupRoute


async function HandleUsername(username){
    if (username == ""){
        return ({status: 400, success: false, message: "Enter a Username"})
    }
    if (username.length < 4){
        return ({status: 400, success: false, message: "Username too short"})
    }
    if (username.length > 20){
        return ({status: 400, success: false, message: "Username too long"})
    }
    let isAvailable = await User.findOne({"username": username})
    if (isAvailable != null){
        return ({status: 401, success: false, message: "Username already exists"})
    }
    let pattern = /^\w+$/
    if (pattern.test(username) == false){
        return ({status: 400, success: false, message: "Symbols and spaces are not allowed"})
    }
    return (true)
}

function HandlePassword(password, confirmPassword){
    if (password == ""){
        return({status: 400, success: false, message: "Enter a password"})
    }
    if (password.length < 8){
        return ({status: 400, success: false, message: "Password too short"})
    }
    if (password.length > 64){
        return ({status: 400, success: false, message: "Password too long"})
    }
    if (password != confirmPassword){
        return ({status: 400, success: false, message: "Passwords do not match"})
    }
    return (true)
}

async function HandleEmail(email){
    let isAvailable = await User.findOne({"email": email})
    if (isAvailable != null){
        return ({status: 401, success: false, message: "Email already exists"})
    }
    let pattern = /\w+@\w+.\w+/
    if ( !pattern.test(email)){
        return ({status: 400, success: false, message: "Email not valid"})
    }
    return (true)
}
