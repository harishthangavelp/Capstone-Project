const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    cpassword:String
})


const userModel = mongoose.model('users',userSchema)

module.exports = userModel