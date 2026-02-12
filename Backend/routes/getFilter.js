import express from "express"
import { VerifyAccessToken } from "./secretToken.js"
import Filter from "../models/Filter.js"
import fs from "fs"

let getFiltersRoute = express.Router()

getFiltersRoute.get("/getFilters", async (req, res) => {
    let filtersList = []
    let filters = await Filter.find({})
    filtersList = filters.map((obj) => obj.filterName)
    res.status(200).send(filtersList)
})


export default getFiltersRoute