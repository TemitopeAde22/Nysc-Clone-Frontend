const Details = require("../models/registrationDetails")
const asyncHandler = require("express-async-handler")

// Check if the user already exists based on the "matric" field
const registerUser = asyncHandler(async (req, res, next) => {
    const matric = req.body.matric

    try {
        const findDetails = await Details.findOne({ matric: matric })
        if (!findDetails) {
            const registerNewUser = await Details.create(req.body)
            res.status(201).json({
                message: "User registered successfully",
                user: registerNewUser,
            })
        } else {
            res.status(409).json({ error: "User Already Registered" })
        }
    } catch (err) {
        // Handle any unexpected errors that might occur during database interactions
        res.status(500).json({ error: "Error while registering user" })
    }
})

const deleteDetails = asyncHandler(async (req, res) => {
    const { id } = req.params
    const deletedDetails = await Details.findByIdAndDelete(id)

    if (!deletedDetails) {
        // If no document was found with the given ID, return a 404 response
        return res.status(404).json({ error: "Details not found" })
    }

    // If the document was successfully deleted, return a success response
    res.json({ message: "Details deleted successfully", deletedDetails })
})

module.exports = { registerUser, deleteDetails }
