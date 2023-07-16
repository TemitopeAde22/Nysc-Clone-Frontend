const asyncHandler = require("express-async-handler")
const User = require("../models/userDetails")

//create a new user
const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email
    const findUser = await User.findOne({ email: email })
    if (!findUser) {
        const newUser = await User.create(req.body)
        res.json(newUser)
    } else {
        throw new Error("User Already Exits")
    }
})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const findUser = await User.findOne({ email })
    if (findUser && (await findUser.isPasswordMatched(password))) {
        res.json({
            _id: findUser?.id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser?.mobile,
            dateOfBirth: findUser?.dateOfBirth,
        })
    } else {
        throw new Error("Invalid Credentials")
    }
})

module.exports = { createUser, loginUser }
