
import mongoose from "mongoose"
import express from "express"
import dotenv from "dotenv"
import loginRoute from "./routes/login.js"
import signupRoute from "./routes/signup.js"
import { VerifyAccessToken } from "./routes/secretToken.js"
import cors from "cors"

dotenv.config()

const app = express()
app.use(cors({
    origin : "http://localhost:5173",
    credentials: true
}))

app.use(express.json())


app.listen(5001, () => {
    console.log("listening")
    createDB()
})

app.get("/test", VerifyAccessToken,(req, res) => {
    res.send("hello bro")
} )

app.use("/", loginRoute)
app.use("/", signupRoute)




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