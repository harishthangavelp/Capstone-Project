
const mongoose = require('mongoose')

const paiduserSchema = new mongoose.Schema({
amount: Number,
amount_due: Number,
amount_paid: Number,
attempts: Number,
created_at: Number,
currency: String,
entity: String,
id: String,
notes: [],
offer_id: String,
receipt: String,
status: String
})


const paiduserModel = mongoose.model('accessdata',paiduserSchema)

module.exports = paiduserModel