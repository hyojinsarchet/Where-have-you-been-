// require all dependencies
const express = require('express')
const hbs = require("hbs")
const bodyParser = require('body-parser')
const cors = require('cors')
const Been = require('./db/models/Been')
const methodOverride = require("method-override")
const beenController = require('./controllers/been')

// create/set up the express app
const app = express()

// configure express to use the middlewares
app.set("view engine", "hbs")
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(methodOverride("_method"))
app.use(cors())
app.use(express.static('public'))

// define the route
// render home page (localhost:3000)
app.get('/', (req, res) => {
    res.render('index')
})

//
app.use('/beens', beenController)

// accomodate Heroku's production port and our own local development port
app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), () => {
    console.log(`loaded on ${app.get('port')}`)
})

// start local server
// app.listen(3000, () => {
//     console.log('Running on 3000!')
// })
