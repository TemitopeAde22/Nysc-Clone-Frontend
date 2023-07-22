const express = require("express")
const {
    createUser,
    loginUser,
    deleteUser,
    getaUser,
} = require("../controller/userCtrl")
const { authMiddleware } = require("../middlewares/authMiddleware")
const router = express.Router()

router.post("/register", createUser)
router.post("/login", loginUser)
router.delete("/:id", deleteUser)
router.get("/:id", authMiddleware, getaUser)

module.exports = router
