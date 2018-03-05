// connect to mongo using mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/been')

// save asynchronous things in Promise
mongoose.Promise = Promise

// export globally
module.exports = mongoose
