// connect to mongo using mongoose
const mongoose = require('mongoose')

// mongoose.connect('mongodb://localhost/been')

// save asynchronous things in Promise
mongoose.Promise = Promise

// set the uri for connecting to our local mongodb
const mongoUri = 'mongodb://localhost/been'

// connect to the database, with the imported mongoose instance
mongoose
  .connect(mongoUri, {useMongoClient: true})
  .then(connection => console.log(`Connection established to db '${connection.db.databaseName}'`))
  .catch(connectionError => console.log('Connection failed!', connectionError))

// export globally
module.exports = mongoose
