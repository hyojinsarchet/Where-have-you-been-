// importing the dependencies
const express = require('express')
const router = express.Router()
const mongoose = require('../db/connection')

const Been = mongoose.model('Been')


// define the routes
// router.get('/', (req, res) => {
//     Been.find({})
//         .then(beens => res.json(beens))
// })

router.get('/', (req, res) => {
    Been.find({}).then(beens => {
      res.render(index)
    })
})


// create new countries
// rounter.post('/', (req, res) => {
//     Been.create(req.body)
//         .then(beens => res.json(beens))
// })

// get new view for a new country

// get a country by its id: '/:id'

// update a country by id

// delete a country by id

// export the router
module.exports = router
