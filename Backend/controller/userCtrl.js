const asyncHandler = require("express-async-handler")
const User = require("../models/userDetails")
const { generateToken } = require("../config/jwToken")

//create a new user
const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email
    const findUser = await User.findOne({ email: email })

    if (!findUser) {
        const newUser = await User.create(req.body)
        res.status(201).json(newUser)
    } else {
        return res.status(409).json({ message: "User Already Exists" })
    }
})

const loginUser = asyncHandler(async (req, res) => {
    const { email, Password } = req.body
    const findUser = await User.findOne({ email })

    if (findUser && (await findUser.isPasswordMatched(Password))) {
        res.json({
            _id: findUser?.id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id),
        })
    } else {
        return res.status(401).json({ error: "Invalid Credentials" })
    }
})

const deleteUser = asyncHandler(async (req, res) => {
    const { id } = req.params
    try {
        const deleteUser = await User.findByIdAndDelete(id)
        res.json({
            deleteUser,
        })
    } catch (error) {
        throw new Error(error)
    }
})

const getaUser = asyncHandler(async (req, res) => {
    const { id } = req.params
    try {
        const user = await User.findById(id)
        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        res.json({
            user,
            // Add other properties you want to include in the response
        })
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
})

module.exports = { createUser, getaUser, loginUser, deleteUser }
