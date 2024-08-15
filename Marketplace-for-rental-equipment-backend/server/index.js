const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const userModel = require('../server/models/user')
const dotenv = require('dotenv')

const app = express()
dotenv.config();
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://harishthangavelp:LXxXUkf2D5j68IfH@hamongvel.6riq9qs.mongodb.net/user");

app.post('/contact',(req,res) => {
    userModel.create(req.body)
    .then(users => req.json(users))
    .catch(err => res.json(err))
    })

app.post('/login',(req,res) => {
    userModel.create(req.body)
    .then(users => req.json(users))
    .catch(err => res.json(err))
    })

app.post('/register',(req,res) => {
userModel.create(req.body)
.then(users => req.json(users))
.catch(err => res.json(err))
})

app.get("/getUsers", async (req, res) => {
    const userData = await userModel.find();
    res.json(userData);
});


app.listen(3001,() => {
    console.log('server in live')
})








































// app.post('/login',(req,res) => {
//     const {email,password} = req.body;
//     userModel.findOne({email: email})
//     .then(user => {
//         if(user){
//             if(user.password === password){
//                 res.json('Success')
//             }
//             else{
//                 res.json('Invalid Credentials')
//             }
//         }
//             else{
//                 res.json('No record found')
//             }
        
//     })
// })