// connect to mongo using mongoose
const mongoose = require('./models/Been')

// mongoose.connect('mongodb://localhost/been')

// save asynchronous things in Promise
mongoose.Promise = Promise

// set the uri for connecting to our local mongodb
const mongoUri = 'mongodb://localhost/been'

// connect to the database, with the imported mongoose instance
mongoose
  .connect(mongoUri)
  .then(connection => console.log(`Connection established to db`))
  .catch(connectionError => console.log('Connection failed!', connectionError))

// export globally
module.exports = mongoose
