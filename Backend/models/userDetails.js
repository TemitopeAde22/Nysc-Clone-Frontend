const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: true,
            index: true,
        },
        lastname: {
            type: String,
            required: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        mobile: {
            type: String,
            required: true,
            unique: true,
        },
        role: {
            type: String,
            default: "User",
        },

        Password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
)

//hash password
userSchema.pre("save", async function (next) {
    const salt = await bcrypt.genSaltSync(10)
    this.Password = await bcrypt.hash(this.Password, salt)
})

userSchema.methods.isPasswordMatched = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.Password)
}

//Export the model
module.exports = mongoose.model("User", userSchema)

// const rawPassword = "224468Ade"
// const hashedPassword =
//     "$2b$10$RL34/VD3tG5bNTa6hIl8.u1Hg7bEvut7jWc4Bdblr2Lu8lXe4CNpC"

// bcrypt
//     .compare(rawPassword, hashedPassword)
//     .then((isMatch) => {
//         if (isMatch) {
//             console.log("Password matches")
//         } else {
//             console.log("Password does not match")
//         }
//     })
//     .catch((error) => {
//         console.error("Error comparing passwords:", error)
//     })
