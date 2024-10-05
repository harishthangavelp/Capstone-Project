const mongoose = require('mongoose');

// Connect to your MongoDB database
mongoose.connect('mongodb+srv://harishthangavelp:LXxXUkf2D5j68IfH@hamongvel.6riq9qs.mongodb.net/user', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define your Mongoose schema
const accessSchema = new mongoose.Schema({
    data: String,
    key: String,
    amount: Number,
    currency: String, // Should typically be a string like 'INR'
    name: String,
    description: String,
    image: String,
    order_id: String,
    orderUrl: String
});

// Create a Mongoose model
const accessModel = mongoose.model('Access', accessSchema);

module.exports = accessModel;

// module.exports = razorpay.model('access',accessSchema)