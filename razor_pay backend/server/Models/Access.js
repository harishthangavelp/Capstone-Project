const razorpay = require('razorpay');
const accessSchema = new razorpay.Schema({
    data: String,
    key: String,
    amount: Number,
    currency: Number,
    name: String,
    description: String,
    image: String,
    order_id: String,
    orderUrl: String
})

const accessModel = razorpay.model('access',accessSchema)
module.exports = accessModel

// module.exports = razorpay.model('access',accessSchema)