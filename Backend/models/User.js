import mongoose from "mongoose"
import bcrypt from "bcrypt"

const userSchema = new mongoose.Schema({
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
    quizes: {
        type: [String]
    },
    bio: {
        type: String
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    photo: {
        type: String,
        default: "https://res.cloudinary.com/dbzf7odr6/image/upload/v1758298532/download_pjyusj.webp"
    }
})



userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12)
})

const User = mongoose.model("User", userSchema)

export default User
