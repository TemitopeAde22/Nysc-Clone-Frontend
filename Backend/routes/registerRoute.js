const express = require("express")
const { registerUser, deleteDetails } = require("../controller/registerCtrl")
const router = express.Router()

router.post("/", registerUser)
router.delete("/:id", deleteDetails)

module.exports = router
