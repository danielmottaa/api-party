const router = require('express').Router()

const serviceController = require('../controllers/serviceController')

router.router('/services').post((req, res) => serviceController.create((req, res)))

module.exports = router