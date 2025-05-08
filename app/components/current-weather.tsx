import Image from "next/image"
import { formatDate } from "../utils/date-formatter"
import type { CurrentWeatherData } from "../types/weather"

interface CurrentWeatherProps {
  data: CurrentWeatherData
  city: string
}

export function CurrentWeather({ data, city }: CurrentWeatherProps) {
  return (
    <div className="card bg-white dark:bg-gray-800 shadow-xl mb-6">
      <div className="card-body">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="card-title text-2xl md:text-3xl">{city}</h2>
            <p className="text-gray-500 dark:text-gray-400">{formatDate(data.dt)}</p>
            <div className="flex items-center mt-2">
              <div className="text-5xl font-bold">{Math.round(data.temp)}°C</div>
            </div>
            <p className="text-lg capitalize">{data.weather[0].description}</p>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
              alt={data.weather[0].description}
              width={150}
              height={150}
              priority
            />
            <div className="flex gap-4 text-sm">
              <span>H: {Math.round(data.temp_max)}°C</span>
              <span>L: {Math.round(data.temp_min)}°C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
