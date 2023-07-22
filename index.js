const express = require("express")
const app = express()
const dotenv = require("dotenv").config()
const cors = require("cors")
const bodyParser = require("body-parser")
const authRouter = require("./Backend/routes/authRoutes")
const registerRouter = require("./Backend/routes/registerRoute")
const { dbConnect } = require("./Backend/config/dbConnect")
const { notFound, errorhandler } = require("./Backend/middlewares/errorHandler")
const PORT = process.env.PORT || 4000

dbConnect()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use("/api/user", authRouter)
app.use("/api/user/details", registerRouter)

app.use(notFound)
app.use(errorhandler)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
