import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

const app = express();
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(() => {
    console.log("DB Connected Successfully");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error)=>console.log(error));



const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

const UserModel = mongoose.model("24", userSchema)

app.get("/getUsers", async (req, res) => {
    const userData = await UserModel.find();
    res.json(userData);
});

// app.post("/post", async (req, res) => {
//     console.log("Inside Post Function");

//     const data = new UserModel({
//         name: req.body.name,
//         age: req.body.age
//     });

//     const val = await data.save();
//     res.json(val);
// });



// app.listen(3000,()=>{
//     console.log("Port 3000");
// })





























// const express = require("express")
// const app = express()
// const mongoose = require("mongoose")
// app.use(express.json())
// //Connection to DB
// mongoose.connect("mongodb://localhost:27017/procute",{
//     useNewUrlParse: true,
//     useUnifiedTopology:true
// },(err)=>{
//     if(!err){
//         console.log("Connected to MongoDB");
//     }
//     else{
//         console.log("Not Connected to MongoDB");
//     }
// })

// app.listen(3000,()=>{
//     console.log("Port 3000");
// })