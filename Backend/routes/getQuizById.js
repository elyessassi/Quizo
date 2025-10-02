import express from "express"
import { VerifyAccessToken } from "./secretToken.js"
import User from "../models/User.js"
import Quiz from "../models/Quiz.js"


let getQuizbyidRoute = express.Router()

getQuizbyidRoute.post("/getquizbyid", async (req, res) => {
    let id = req.id
    let quiz = await Quiz.findById({id})
    res.status(200).send(quiz)   
})

export default getQuizbyidRoute