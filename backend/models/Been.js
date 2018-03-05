// import db connection
const mongoose = require('../db/mongoose')

// create a new Schema
const BeenSchema = new mongoose.Schema({

 // still need to decide what kind of data to put here
 // ex)
 // title: String,
 // url: String

})

// giving mongoose the Schema to build the model
const Been = mongoose.model('Been', BeenSchema)

// exporting the Been model
module.exports = Been
