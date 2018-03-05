const mongoose = require('./connection')
const seeds = require('./seeds')

const Been = mongoose.model('Been')

mongoose.Promise = Promise

Been.remove({}).then(_ => {
  console.log('Dropped the DB')
  Been.collection.insert(seeds).then(seededEntries => {
    console.log(seededEntries)
    mongoose.connection.close()
  })
})
