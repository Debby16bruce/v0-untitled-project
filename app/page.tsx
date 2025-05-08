"use client"

import { useState, useEffect } from "react"
import { Search } from "./components/search"
import { CurrentWeather } from "./components/current-weather"
import { WeatherForecast } from "./components/weather-forecast"
import { WeatherDetails } from "./components/weather-details"
import { LoadingSpinner } from "./components/loading-spinner"
import { ErrorDisplay } from "./components/error-display"
import { getMockWeatherData } from "./utils/mock-data"
import type { WeatherData } from "./types/weather"

export default function Home() {
  // State for the current city, weather data, loading state, and errors
  const [city, setCity] = useState<string>("London")
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [useMockData, setUseMockData] = useState<boolean>(false)

  // Fetch weather data when the city changes
  useEffect(() => {
    fetchWeatherData(city)
  }, [city])

  /**
   * Fetches weather data from the Laravel backend
   * @param cityName The name of the city to fetch weather data for
   */
  const fetchWeatherData = async (cityName: string) => {
    try {
      setLoading(true)
      setError(null)

      // Use environment variable with fallback
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"

      // Try to fetch from our Laravel backend
      try {
        const response = await fetch(`${apiUrl}/api/weather?city=${encodeURIComponent(cityName)}`, {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          // Set a timeout to prevent long waiting times
          signal: AbortSignal.timeout(5000),
        })

        // Check if response is OK
        if (!response.ok) {
          const contentType = response.headers.get("content-type")

          // If the response is JSON, try to parse the error message
          if (contentType && contentType.includes("application/json")) {
            const errorData = await response.json()
            throw new Error(errorData.error || `Error: ${response.status} ${response.statusText}`)
          } else {
            // If not JSON, throw a generic error with status
            throw new Error(`Server returned ${response.status}: ${response.statusText}`)
          }
        }

        // Check if response is JSON
        const contentType = response.headers.get("content-type")
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Server returned non-JSON response")
        }

        const data = await response.json()
        setWeatherData(data)
        setUseMockData(false)
      } catch (err) {
        console.warn("API fetch failed, using mock data:", err)

        // If we're in a preview environment or the API request failed, use mock data
        const mockData = getMockWeatherData(cityName)
        setWeatherData(mockData)
        setUseMockData(true)
      }
    } catch (err) {
      console.error("Error fetching weather data:", err)
      setError(err instanceof Error ? err.message : "An unknown error occurred")
    } finally {
      setLoading(false)
    }
  }

  /**
   * Handles the search form submission
   * @param searchCity The city name from the search form
   */
  const handleSearch = (searchCity: string) => {
    if (searchCity.trim() !== "") {
      setCity(searchCity)
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-100 to-sky-200 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-sky-800 dark:text-sky-300">Weather App</h1>

        <Search onSearch={handleSearch} />

        {useMockData && (
          <div className="alert alert-warning mt-4 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            <span>Using mock data. Backend API is not available.</span>
          </div>
        )}

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorDisplay message={error} />
        ) : weatherData ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            <div className="lg:col-span-2">
              <CurrentWeather data={weatherData.current} city={city} />
              <WeatherForecast forecast={weatherData.forecast} />
            </div>
            <div>
              <WeatherDetails data={weatherData.current} />
            </div>
          </div>
        ) : null}
      </div>
    </main>
  )
}
