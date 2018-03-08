// import the dependencies
const express = require('express')
const router = express.Router()
const mongoose = require('../db/connection')
const Been = mongoose.model('Been')

// define the routes
router.get('/', (req, res) => {
    Been.find({}).then(beens => {
        res.render('beens/index', {beens})
    })
})

// POST request for creating new countries
router.post('/', (req, res) => {
    Been.create({
        name: req.body.name,
        lat: req.body.lat,
        lng: req.body.lng
    }).then(() => {
      res.redirect('/beens')
    })
})

// GET request to render the new page
router.get("/new", (req, res) => {
    res.render("beens/new")
})

// GET request to edit the countries
router.get('/edit/:id', (req, res) => {
    Been.findOne({_id: req.params.id}).then(been => {
        res.render('beens/edit', been)
    })
})

// PUT request to update the countries
router.put('/:id', (req, res) => {
    Been.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).then(
      been => {
        res.redirect('/beens')
      }
    )
})

// GET request to select one country
router.get("/:id", (req, res) => {
  Been.findOne({ _id: req.params.id }).then(been => {
    res.render("beens/show", been)
  })
})

// request to select/delete one of the countries
router.delete('/:id', (req, res) => {
    Been.findOneAndRemove({_id: req.params.id}).then(() => {
        res.redirect('/beens')
    })
})

// export the router
module.exports = router
