import express from "express"
import { VerifyAccessToken } from "./secretToken.js"
import Quiz from "../models/Quiz.js"

let searchRoute = express.Router()


searchRoute.post("/search", async (req, res) => {
    console.log(req.body)
    let {searchBarValue, Filters} = req.body
    console.log("im here now")
    let quizzes = await Quiz.find({"quizTitle": {$regex: `^${searchBarValue}`, $options: 'i' }})
    res.status(200).send(quizzes)
})


export default searchRoute