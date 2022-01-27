require("dotenv").config()
const express = require("express")
const app = express()
var cors = require('cors')
const apiRoute = require("./routes/product")
const mongoose = require("mongoose")

app.use(cors())
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("database connection successful"))
    .catch(err=> console.log(err))

app.use(express.json())

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "X-Requested-With, Content-Type, Accept, Authorization")
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-hEADER","PUT, POST, PATCH, GET, DELETE,")
        return res.status(200).json({})
    }
    next()
})

app.use("/api", apiRoute)


const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server running on port ${PORT}`))
