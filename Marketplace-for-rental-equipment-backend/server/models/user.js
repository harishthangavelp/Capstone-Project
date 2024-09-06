const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: String,
    hashpass:String,
    hashpass1:String,
    hashpass2:String,
    password: String,
    cpassword:String,
    fname:String,
    lname:String,
    phone:Number,
    text:String,
    nameform:String,
    nameph:Number,
    namemail:String,
    fradform:String,
    toadform:String,
    timeform:String,
    dmyform:String
})


const userModel = mongoose.model('users',userSchema)

module.exports = userModel