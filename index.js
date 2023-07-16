const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const bodyParser = require("body-parser")
const authRouter = require("./Backend/routes/authRoutes")
const { dbConnect } = require("./Backend/config/dbConnect")
const PORT = process.env.PORT || 4000

dbConnect()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use("api/user", authRouter)
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
