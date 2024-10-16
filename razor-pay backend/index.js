const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')
const paiduserModel = require('../razor-pay backend/models/paid-user')

const app = express()
dotenv.config();
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://harishthangavelp:LXxXUkf2D5j68IfH@hamongvel.6riq9qs.mongodb.net/paid-user");

app.post('/api/payment/orders',(req,res) => {
    paiduserModel.create(req.body)
    .then(accessdata => req.json(accessdata))
    .catch(err => res.json(err))
    })

app.get("/getpaid", async (req, res) => {
    const paiduserData = await paiduserModel.find();
    res.json(paiduserData);
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