import { Droplets, Wind, Sunrise, Sunset, Thermometer, Gauge } from "lucide-react"
import { formatTime } from "../utils/date-formatter"
import type { CurrentWeatherData } from "../types/weather"

interface WeatherDetailsProps {
  data: CurrentWeatherData
}

export function WeatherDetails({ data }: WeatherDetailsProps) {
  return (
    <div className="card bg-white dark:bg-gray-800 shadow-xl h-full">
      <div className="card-body">
        <h2 className="card-title mb-4">Weather Details</h2>

        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <Thermometer className="w-6 h-6 text-orange-500" />
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Feels Like</p>
              <p className="font-medium">{Math.round(data.feels_like)}°C</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <Droplets className="w-6 h-6 text-blue-500" />
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Humidity</p>
              <p className="font-medium">{data.humidity}%</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <Wind className="w-6 h-6 text-teal-500" />
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Wind Speed</p>
              <p className="font-medium">{data.wind_speed} m/s</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <Gauge className="w-6 h-6 text-purple-500" />
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Pressure</p>
              <p className="font-medium">{data.pressure} hPa</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <Sunrise className="w-6 h-6 text-yellow-500" />
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Sunrise</p>
              <p className="font-medium">{formatTime(data.sunrise)}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <Sunset className="w-6 h-6 text-orange-500" />
            <div>
              <p className="text-gray-500 dark:text-gray-400 text-sm">Sunset</p>
              <p className="font-medium">{formatTime(data.sunset)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
