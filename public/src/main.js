const weatherContainer = document.getElementById('weatherContainer')
const btn = document.getElementById('getLocation')

const fetchLocation = () => {
  btn.addEventListener('click', (e) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (data) => {
          const url = `/api/v1/weather/latlon/${data.coords.latitude}/${data.coords.longitude}`
          try {
            const response = await fetch(url)
            const result = await response.json()
            console.log(result)
          } catch (error) {
            console.error(error)
          }
        },
        (error) => {
          console.log(error)
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      )
    } else {
      console.warn('GeoLocation Not Support in your browser')
    }
  })
}

fetchLocation()
