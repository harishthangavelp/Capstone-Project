const mongoose = require('mongoose');
const logerSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    cpassword: String,
    fname: String,
    lname: String,
    phone: Number,
    text: String
});

 module.exports = mongoose.model('loger',logerSchema)