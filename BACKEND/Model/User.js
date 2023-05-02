const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("Connected to DB")
})
.catch((err) => {
    console.log(err)
})

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        minLength: 8
    }

})

module.exports = mongoose.model("User", userSchema)