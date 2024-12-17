const express = require('express')
const router = express.Router()
const { getWeatherByCity } = require('../controllers/cityController')

router.get('/city/:cityName', getWeatherByCity)

module.exports = router
