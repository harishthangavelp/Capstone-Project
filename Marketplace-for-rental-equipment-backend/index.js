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

// app.get('/test', (req, res) => {
//    let getResult = await loger.find()
//    return res.send(getResult)
//  })

 app.get('/getValue'),async(req,res)=>{
   let loger = new Logers(req.body);
   const userData = await loger.find();
   return res.send(userData)
}

app.listen(8000);