/**
 * Main weather data interface containing current weather and forecast
 */
export interface WeatherData {
  current: CurrentWeatherData
  forecast: ForecastData[]
}

/**
 * Current weather data interface
 */
export interface CurrentWeatherData {
  dt: number
  sunrise: number
  sunset: number
  temp: number
  feels_like: number
  pressure: number
  humidity: number
  dew_point: number
  uvi: number
  clouds: number
  visibility: number
  wind_speed: number
  wind_deg: number
  weather: WeatherInfo[]
  temp_min: number
  temp_max: number
}

/**
 * Forecast data interface with flexible structure to handle different API responses
 */
export interface ForecastData {
  dt: number
  sunrise?: number
  sunset?: number
  temp:
    | {
        day: number
        min?: number
        max?: number
        night?: number
        eve?: number
        morn?: number
      }
    | number
  feels_like:
    | {
        day: number
        night?: number
        eve?: number
        morn?: number
      }
    | number
  pressure: number
  humidity: number
  weather: WeatherInfo[]
  clouds: number
  pop?: number
  uvi?: number
  wind_speed?: number
}

/**
 * Weather information interface for conditions and icons
 */
export interface WeatherInfo {
  id: number
  main: string
  description: string
  icon: string
}
