import Image from "next/image"
import { formatDay } from "../utils/date-formatter"
import type { ForecastData } from "../types/weather"

interface WeatherForecastProps {
  forecast: ForecastData[]
}

export function WeatherForecast({ forecast }: WeatherForecastProps) {
  return (
    <div className="card bg-white dark:bg-gray-800 shadow-xl">
      <div className="card-body">
        <h2 className="card-title mb-4">5-Day Forecast</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {forecast.map((day, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <p className="font-medium">{formatDay(day.dt)}</p>
              <Image
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                alt={day.weather[0].description}
                width={50}
                height={50}
              />
              <p className="text-sm capitalize">{day.weather[0].description}</p>
              <div className="flex gap-2 text-sm mt-1">
                <span>{Math.round(day.temp?.max || day.temp?.day || 0)}°</span>
                <span className="text-gray-500 dark:text-gray-400">
                  {Math.round(day.temp?.min || (day.temp?.night || 0) - 2)}°
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
