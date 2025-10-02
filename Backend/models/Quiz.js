import mongoose from "mongoose"

const quizSchema = new mongoose.Schema({
    quizTitle:{
        type: String,
        required: true,
        unique: true
    },
    quizCreator:{
        type: String,
        required: true,
    },
    slidesNum: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    questions: {
        type: Object,
        required: true
    }
})


const Quiz = mongoose.model("Quiz", quizSchema)

export default Quiz
