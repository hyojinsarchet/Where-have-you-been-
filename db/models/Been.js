// import mongoose connect
const mongoose = require('mongoose')

// define/create a new Schema, structure of the database
// they are used to create the model
const BeenSchema = new mongoose.Schema({
    name: String,
    lat: Number,
    lng: Number
})

// create mongoose model
// by passing in the name of the model and the Schema to build the model
mongoose.model('Been', BeenSchema)

// export out the Been model
module.exports = mongoose
