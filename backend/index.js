// require all dependencies
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const Been = require('./db/models/Been')
const beenController = require('./controllers/been')

// create/ set up the express app
const app = express()

// configure express to use bodyParser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())

// to check if it's connected to server
// app.get('/', (req, res) => {
//     res.send('Hello world!')
// })

// by using './been', it's not necessary to add './been' in the 'controllers' file.
// the route to connect with frontend part
app.use('/beens', beenController)

// start local server
app.listen(3000, () => {
    console.log('Running on 3000!')
})
