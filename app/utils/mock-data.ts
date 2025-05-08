import { subDays } from "date-fns"
import type { WeatherData, CurrentWeatherData, ForecastData } from "../types/weather"

/**
 * Generates mock weather data for a given city
 * @param city The city name
 * @returns Mock weather data
 */
export function getMockWeatherData(city: string): WeatherData {
  // Current time in seconds
  const now = Math.floor(Date.now() / 1000)

  // Generate random temperature between 0 and 35°C
  const temp = Math.floor(Math.random() * 35)

  // Generate random weather condition
  const weatherConditions = [
    { id: 800, main: "Clear", description: "clear sky", icon: "01d" },
    { id: 801, main: "Clouds", description: "few clouds", icon: "02d" },
    { id: 802, main: "Clouds", description: "scattered clouds", icon: "03d" },
    { id: 803, main: "Clouds", description: "broken clouds", icon: "04d" },
    { id: 500, main: "Rain", description: "light rain", icon: "10d" },
    { id: 501, main: "Rain", description: "moderate rain", icon: "10d" },
    { id: 600, main: "Snow", description: "light snow", icon: "13d" },
  ]

  const randomWeather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)]

  // Create mock current weather data
  const current: CurrentWeatherData = {
    dt: now,
    sunrise: now - 21600, // 6 hours ago
    sunset: now + 21600, // 6 hours from now
    temp: temp,
    feels_like: temp - 2,
    pressure: 1013,
    humidity: Math.floor(Math.random() * 100),
    dew_point: 0,
    uvi: Math.floor(Math.random() * 10),
    clouds: Math.floor(Math.random() * 100),
    visibility: 10000,
    wind_speed: Math.floor(Math.random() * 10),
    wind_deg: Math.floor(Math.random() * 360),
    weather: [randomWeather],
    temp_min: temp - 3,
    temp_max: temp + 3,
  }

  // Create mock forecast data
  const forecast: ForecastData[] = []

  for (let i = 0; i < 5; i++) {
    const forecastDay = Math.floor(subDays(new Date(), -i).getTime() / 1000)
    const forecastTemp = temp + Math.floor(Math.random() * 10) - 5
    const forecastWeather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)]

    forecast.push({
      dt: forecastDay,
      sunrise: forecastDay - 21600,
      sunset: forecastDay + 21600,
      temp: {
        day: forecastTemp,
        min: forecastTemp - 3,
        max: forecastTemp + 3,
        night: forecastTemp - 5,
        eve: forecastTemp - 2,
        morn: forecastTemp - 1,
      },
      feels_like: {
        day: forecastTemp - 2,
        night: forecastTemp - 7,
        eve: forecastTemp - 4,
        morn: forecastTemp - 3,
      },
      pressure: 1013,
      humidity: Math.floor(Math.random() * 100),
      weather: [forecastWeather],
      clouds: Math.floor(Math.random() * 100),
      pop: Math.random(),
      uvi: Math.floor(Math.random() * 10),
      wind_speed: Math.floor(Math.random() * 10),
    })
  }

  return {
    current,
    forecast,
  }
}
