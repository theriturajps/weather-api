const express = require('express')
const app = express()
const morgan = require('morgan')
const coordinateRoutes = require('./routes/coordinateRoutes')
const cityRoutes = require('./routes/cityRoutes')
const publicRoutes = require('./routes/publicRoutes')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(`${__dirname}/../public`))
app.use(morgan('dev'))

app.use('/api/v1/weather', [coordinateRoutes, cityRoutes])
app.use('/', publicRoutes)

module.exports = app
