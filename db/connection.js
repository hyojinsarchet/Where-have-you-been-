// connect to mongo using mongoose
const mongoose = require('./models/Been')

// save asynchronous things in Promise
mongoose.Promise = Promise

// set the uri for connecting to our local mongodb
const mongoUri = 'mongodb://localhost/been'

// connect to the database, with the imported mongoose instance
mongoose
  .connect(mongoUri)
  .then(connection => console.log(`Connection established to db`))
  .catch(connectionError => console.log('Connection failed!', connectionError))

// use the MLab URI (the link that connects us to the MLab database)
if (process.env.NODE_ENV == "production") {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect("mongodb://localhost/Where-have-you-been?");
}

// export globally
module.exports = mongoose
