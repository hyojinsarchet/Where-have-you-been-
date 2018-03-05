// importing the dependencies
const express = require('express')
const router = express.Router()
const mongoose = require('../db/connection')

const Been = mongoose.model('Been')


// define the routes
router.get('/', (req, res) => {
    Been.find({})
        .then(beens => res.json(beens))
})


// create new countries
router.post('/', (req, res) => {
    Been.create(req.body)
        .then(beens => res.json(beens))
})

// get a country by its id: '/:id'
// grab name using mongoose
router.get('/:name', (req, res) => {
    Been.findOne({name: req.params.name})
        .then(beens => res.json(beens))
})


// update a country by id
router.put('/:name', (req, res) => {
    Been.findOneAndUpdate({name: req.params.name}, req.body)
        .then(beens => res.json(beens))
})

// delete a country by id
router.delete('/:name', (req, res) => {
    Been.findOneAndRemove({name: req.params.name})
        .then(beens => res.json(beens))
})

// export the router
module.exports = router
