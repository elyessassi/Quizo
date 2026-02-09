
import mongoose from "mongoose"
import express from "express"
import dotenv from "dotenv"
import loginRoute from "./routes/login.js"
import signupRoute from "./routes/signup.js"
import { VerifyAccessToken } from "./routes/secretToken.js"
import createQuizRoute from "./routes/quizCreation.js"
import cors from "cors"
import profileRoute from "./routes/profile.js"
import {v2 as Cloudinary} from "cloudinary"
import getQuizzesRoute from "./routes/getAllQuizzes.js"
import getQuizbyidRoute from "./routes/getQuizById.js"
import searchRoute from "./routes/search.js"

dotenv.config()

const app = express()
app.use(cors({
    origin : "http://localhost:5173",
    credentials: true,
    methods : ["GET", "POST", "DELETE", "OPTIONS"]
}))



app.use(express.json())


app.listen(5001, () => {
    console.log("listening")
    createDB()
})


app.use("/", loginRoute)
app.use("/", signupRoute)
app.use("/", profileRoute)
app.use("/", createQuizRoute)
app.use("/", getQuizzesRoute)
app.use("/", getQuizbyidRoute)
app.use('/', searchRoute)





async function createDB() {
    try{
        await mongoose.connect(process.env.MONGOSTRING)
        console.log("mongodb connected !!!")
    }
    catch(e){
        console.log("here is the error", e)
        process.exit(1)
    }
}

Cloudinary.config({
    secure: true
})
