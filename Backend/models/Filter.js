import mongoose from "mongoose"

const filterSchema = new mongoose.Schema({
    filterName : {
        type: String,
    },
    numberOfOcc: {
        type: Number,
    }
})


const Filter = mongoose.model("Filter", filterSchema)

export default Filter
