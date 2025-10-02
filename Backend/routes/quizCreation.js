import express from "express"
import { VerifyAccessToken } from "./secretToken.js"
import User from "../models/User.js"
import Quiz from "../models/Quiz.js"

let createQuizRoute = express.Router()

createQuizRoute.post("/createQuiz", VerifyAccessToken, async (req, res) => {
    let {Title, SlidesNum, Slides} = req.body
    let user = await User.findById(req.id)
    let checkTitle = await Quiz.findOne({"quizTitle": Title})
    if (checkTitle != null){
        res.status(401).send({success: false, message: "Title already exists"})
        return
    }
    let newQuiz = new Quiz({"quizTitle": Title, "quizCreator": user.username, "slidesNum": SlidesNum, "questions": Slides})
    newQuiz.save()
    user.quizesCreated.push(newQuiz)
    user.save()
})

export default createQuizRoute