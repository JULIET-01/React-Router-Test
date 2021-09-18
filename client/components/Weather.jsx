import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Weather () {
  useEffect(() => {
    fetchWeatherForecast()
  }, [])

  const [weatherForecast, setWeatherForecast] = useState([])
  const fetchWeatherForecast = async () => {
    const data = await fetch(
      'https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=en'
    )
    const weatherForecast = await data.json()
    console.log(weatherForecast.weatherForecast)
    setWeatherForecast(weatherForecast.weatherForecast)
  }

  return (
    <>
      <div>
        <h3>Welcome to the Weather Page, select your weekday</h3>
        {weatherForecast.map(weekday => (
          <p key={weatherForecast.forecastDate}>
            <Link to={`/weather/${weekday.week}`}>{weekday.week}</Link></p>
        ))}
      </div>
    </>
  )
}

export default Weather
