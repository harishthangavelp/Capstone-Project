const express = require('express')
const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

require('./Server-Connection/connection')
const Logers = require('./Models/Loger')

app.post('/',async(req,res)=>{
   let loger = new Logers(req.body);
   let result = await loger.save();
   res.send(result);
})

const userModel = mongoose.model('loger',logerSchema)

app.get('/getValue'),async(req,res)=>{
   const userData = await userModel.find();
   res.json(userData);
}

app.listen(8000);