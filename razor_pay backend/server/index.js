const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const paymentRoutes = require("../server/Routes/payment");
const accessModel = require("../server/Models/Access");

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

// mongoose.connect("https://capstone-project-22.onrender.com/access");

app.post('/pay',(req,res) => {
    accessModel.create(req.body)
    .then(users => req.json(users))
    .catch(err => res.json(err))
    })

app.get("/getpaymentdetails", async (req, res) => {
        const payData = await accessModel.find();
        res.json(payData);
    });
    

app.use("/api/payment/",paymentRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}...`));