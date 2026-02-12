import express from "express"
import { VerifyAccessToken } from "./secretToken.js"
import User from "../models/User.js"
import Quiz from "../models/Quiz.js"
import Filter from "../models/Filter.js"


let createQuizRoute = express.Router()

createQuizRoute.post("/createQuiz", VerifyAccessToken, async (req, res) => {
    let {Title, SlidesNum, Slides, Image, Filters} = req.body
    console.log(`these are the filters   ${Filters}`)
    let user = await User.findById(req.id)
    let checkTitle = await Quiz.findOne({"quizTitle": Title})
    console.log(Image)
    if (checkTitle != null){
        res.status(401).send({success: false, message: "Title already exists"})
        return
    }
    let newQuiz = new Quiz({"quizTitle": Title, "userModel": user, "slidesNum": SlidesNum, "questions": Slides, "img": Image, "filters": Filters})
    newQuiz.save()
    user.quizesCreated.push(newQuiz)
    user.save()
    // handling filter model
    if (Filters.length != 0){
        for (let i = 0; i < Filters.length; i++){
            let checkFilter = await Filter.findOne({"filterName": Filters[i]})
            if (checkFilter){
                checkFilter.numberOfOcc = checkFilter.numberOfOcc + 1
                await checkFilter.save()
            }
            else {
                let temp = new Filter({"filterName": Filters[i], "numberOfOcc": 1})
                temp.save()
            }
        }
    }

})


export default createQuizRoute