import express from "express"
import { VerifyAccessToken } from "./secretToken.js"
import User from "../models/User.js"
import Quiz from "../models/Quiz.js"


let getQuizzesRoute = express.Router()

getQuizzesRoute.get("/getallquizzes", async (req, res) => {
    let quizzs = await Quiz.find({})
    res.status(200).send(quizzs)   
})

export default getQuizzesRoute