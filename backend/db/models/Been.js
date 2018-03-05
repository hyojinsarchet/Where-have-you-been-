// import db connection
const mongoose = require('mongoose')

// create a new Schema
const BeenSchema = new mongoose.Schema({

    name: String,
    lat: Number,
    lng: Number
})

// giving mongoose the Schema to build the model
mongoose.model('Been', BeenSchema)

// exporting the Been model
module.exports = mongoose
