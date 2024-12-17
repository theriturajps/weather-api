const getWeatherByCity = (req, res) => {
  res.send(`${req.params.cityName}`)
  res.end()
}

module.exports = { getWeatherByCity }
