import mongoose from "mongoose"

const quizSchema = new mongoose.Schema({
    quizTitle:{
        type: String,
        required: true,
        unique: true
    },
    userModel: {
        type: mongoose.Schema.ObjectId,
        default: [],
        ref: "User"
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
    },
    img : {
        type : String,
        required: true
    },
    filters: {
        type: [String],
        default: []
    }
})


const Quiz = mongoose.model("Quiz", quizSchema)

export default Quiz
