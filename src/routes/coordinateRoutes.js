const express = require('express')
const router = express.Router()
const { getWeatherByCoordinates } = require('../controllers/coordinateController')

router.get('/latlon/:latitude/:longitude', getWeatherByCoordinates)

module.exports = router