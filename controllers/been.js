// importing the dependencies
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


// create new countries
router.post('/', (req, res) => {
    Been.create({
        name: req.body.name,
        lat: req.body.lat,
        lng: req.body.lng
    }).then(() => {
      res.redirect('/beens')
    })
})

router.get("/new", (req, res) => {
    res.render("beens/new")
})

router.get('/edit/:id', (req, res) => {
    Been.findOne({_id: req.params.id}).then(been => {
        res.render('beens/edit', been)
    })
})

// update a country by id
router.put('/:id', (req, res) => {
    Been.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}).then(
      been => {
        res.redirect('/beens')
      }
    )
})

router.get("/:id", (req, res) => {
  Been.findOne({ _id: req.params.id }).then(been => {
    res.render("beens/show", been)
  })
})

// delete a country by id
router.delete('/:id', (req, res) => {
    Been.findOneAndRemove({_id: req.params.id}).then(() => {
        res.redirect('/beens')
    })
})

// export the router
module.exports = router
