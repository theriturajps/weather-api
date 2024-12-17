const getWeatherByCoordinates = async (req, res) => {

  const latitude = Number(`${req.params.latitude}`)
  const longitude = Number(`${req.params.longitude}`)
  
  const apiUrl = `https://${process.env.OpenWeather}/city/latlon/${latitude}/${longitude}`

  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': `${process.env.RapidAPI}`,
      'x-rapidapi-host': `${process.env.OpenWeather}`,
    }
  }

  try {
    const response = await fetch(apiUrl, options)
    const result = Object.entries(JSON.parse(await response.text()))
    res.status(200).json({
      dataLength: result.length,
      data: result
    })
  } catch (error) {
    res.json({
      error : 'Something went wrong....'
    })
  }

  res.end()
}

module.exports = { getWeatherByCoordinates }