const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: String,
    hashpass:String,
    password: String,
    cpassword:String,
    fname:String,
    lname:String,
    phone:Number,
    text:String
})


const userModel = mongoose.model('users',userSchema)

module.exports = userModel