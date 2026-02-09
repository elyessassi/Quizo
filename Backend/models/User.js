import mongoose from "mongoose"
import bcrypt from "bcrypt"

export const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true

    },
    password:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    quizesCreated: {
        type: [mongoose.Schema.ObjectId],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    photo: {
        type: String,
        default: "https://ibb.co/gFrcZzJX"
    },
    recentlyPlayed: {
        type: [mongoose.Schema.ObjectId],
        default: [] 
    },
})



userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12)
})

const User = mongoose.model("User", userSchema)

export default User
