// import mongoose connection
const mongoose = require('./connection')

// import the seed data from json
const seeds = require('./seeds')

const Been = mongoose.model('Been')

mongoose.Promise = Promise

// remove any existing data stored in the db
// then insert all the new data in the json file
Been.remove({}).then(_ => {
  console.log('Dropped the DB')
  Been.collection.insert(seeds).then(seededEntries => {
    console.log(seededEntries)
    mongoose.connection.close()
  })
})
