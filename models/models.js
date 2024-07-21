const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    email:String,
    password:String,
    resetpasswordtoken:String,
    resetpasswordexpires: Date
})

module.exports = mongoose.model("Customers",schema)