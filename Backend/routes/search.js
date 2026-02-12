import express from "express"
import { VerifyAccessToken } from "./secretToken.js"
import Quiz from "../models/Quiz.js"

let searchRoute = express.Router()


searchRoute.post("/search", async (req, res) => {
    console.log(req.body)
    let {searchBarValue, filters} = req.body
    console.log("im here now")
    let query = {}
    if (searchBarValue.length > 0){
        query.quizTitle = {$regex: `^${searchBarValue}`, $options: 'i' }
    }
    if (filters.length > 0){
        query.filters = {$all: filters}
    }
    console.log(query)

    let quizzes = await Quiz.find(query)
    console.log(quizzes)
    res.status(200).send(quizzes)

})


export default searchRoute