<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

class WeatherController extends Controller
{
    /**
     * Get weather data for a specified city
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function getWeather(Request $request)
    {
        try {
            // Validate the request
            $request->validate([
                'city' => 'required|string|max:255',
            ]);

            $city = $request->query('city');
            
            // Cache key based on city name
            $cacheKey = 'weather_' . strtolower(str_replace(' ', '_', $city));
            
            // Check if we have cached data (cache for 30 minutes)
            return Cache::remember($cacheKey, 1800, function () use ($city) {
                // Get coordinates for the city
                $geoResponse = $this->getGeoData($city);
                
                if (empty($geoResponse)) {
                    return response()->json(['error' => 'City not found'], 404);
                }
                
                $lat = $geoResponse[0]['lat'];
                $lon = $geoResponse[0]['lon'];
                $cityName = $geoResponse[0]['name'];
                
                // Get weather data using coordinates
                return $this->getWeatherData($lat, $lon, $cityName);
            });
        } catch (\Exception $e) {
            Log::error('Weather API error: ' . $e->getMessage());
            // Always return JSON for exceptions
            return response()->json([
                'error' => 'Failed to fetch weather data: ' . $e->getMessage()
            ], 500);
        }
    }
    
    /**
     * Get geographical coordinates for a city name
     *
     * @param string $city
     * @return array|null
     */
    private function getGeoData($city)
    {
        $apiKey = env('OPENWEATHER_API_KEY');
        
        try {
            $response = Http::get("https://api.openweathermap.org/geo/1.0/direct", [
                'q' => $city,
                'limit' => 1,
                'appid' => $apiKey,
            ]);
            
            if ($response->successful()) {
                return $response->json();
            }
            
            Log::warning('Geo API error: ' . $response->status() . ' - ' . $response->body());
            return null;
        } catch (\Exception $e) {
            Log::error('Geo API exception: ' . $e->getMessage());
            return null;
        }
    }
    
    /**
     * Get weather data using coordinates
     *
     * @param float $lat
     * @param float $lon
     * @param string $cityName
     * @return \Illuminate\Http\JsonResponse
     */
    private function getWeatherData($lat, $lon, $cityName)
    {
        $apiKey = env('OPENWEATHER_API_KEY');
        
        try {
            // Get current weather
            $currentResponse = Http::get("https://api.openweathermap.org/data/2.5/weather", [
                'lat' => $lat,
                'lon' => $lon,
                'units' => 'metric',
                'appid' => $apiKey,
            ]);
            
            if (!$currentResponse->successful()) {
                Log::warning('Current weather API error: ' . $currentResponse->status() . ' - ' . $currentResponse->body());
                return response()->json([
                    'error' => 'Failed to fetch current weather data: ' . $currentResponse->status()
                ], $currentResponse->status());
            }
            
            // Try to get 5-day forecast using the One Call API
            $forecastResponse = Http::get("https://api.openweathermap.org/data/2.5/forecast", [
                'lat' => $lat,
                'lon' => $lon,
                'units' => 'metric',
                'appid' => $apiKey,
            ]);
            
            if (!$forecastResponse->successful()) {
                Log::warning('Forecast API error: ' . $forecastResponse->status() . ' - ' . $forecastResponse->body());
                return response()->json([
                    'error' => 'Failed to fetch forecast data: ' . $forecastResponse->status()
                ], $forecastResponse->status());
            }
            
            $current = $currentResponse->json();
            $forecastData = $this->processForecastData($forecastResponse->json());
            
            // Format the response
            return response()->json([
                'current' => [
                    'dt' => $current['dt'],
                    'sunrise' => $current['sys']['sunrise'],
                    'sunset' => $current['sys']['sunset'],
                    'temp' => $current['main']['temp'],
                    'feels_like' => $current['main']['feels_like'],
                    'pressure' => $current['main']['pressure'],
                    'humidity' => $current['main']['humidity'],
                    'dew_point' => 0, // Not available in this API
                    'uvi' => 0, // Not available in this API
                    'clouds' => $current['clouds']['all'],
                    'visibility' => $current['visibility'],
                    'wind_speed' => $current['wind']['speed'],
                    'wind_deg' => $current['wind']['deg'],
                    'weather' => $current['weather'],
                    'temp_min' => $current['main']['temp_min'],
                    'temp_max' => $current['main']['temp_max'],
                ],
                'forecast' => $forecastData,
            ]);
        } catch (\Exception $e) {
            Log::error('Weather data processing exception: ' . $e->getMessage());
            return response()->json([
                'error' => 'Error processing weather data: ' . $e->getMessage()
            ], 500);
        }
    }

    /**
     * Process the forecast data to get daily forecasts
     *
     * @param array $forecastData
     * @return array
     */
    private function processForecastData($forecastData)
    {
        // Group forecast data by day
        $dailyForecasts = [];
        $processedDays = [];
        
        foreach ($forecastData['list'] as $forecast) {
            // Get the date without time
            $date = date('Y-m-d', $forecast['dt']);
            
            // Only process each day once
            if (!in_array($date, $processedDays)) {
                $processedDays[] = $date;
                
                // Format to match our expected structure
                $dailyForecasts[] = [
                    'dt' => $forecast['dt'],
                    'weather' => $forecast['weather'],
                    'temp' => [
                        'day' => $forecast['main']['temp'],
                        'min' => $forecast['main']['temp_min'],
                        'max' => $forecast['main']['temp_max'],
                        'night' => $forecast['main']['temp'],
                        'eve' => $forecast['main']['temp'],
                        'morn' => $forecast['main']['temp'],
                    ],
                    'feels_like' => [
                        'day' => $forecast['main']['feels_like'],
                        'night' => $forecast['main']['feels_like'],
                        'eve' => $forecast['main']['feels_like'],
                        'morn' => $forecast['main']['feels_like'],
                    ],
                    'pressure' => $forecast['main']['pressure'],
                    'humidity' => $forecast['main']['humidity'],
                    'clouds' => $forecast['clouds']['all'],
                    'wind_speed' => isset($forecast['wind']['speed']) ? $forecast['wind']['speed'] : 0,
                ];
                
                // Only take 5 days
                if (count($dailyForecasts) >= 5) {
                    break;
                }
            }
        }
        
        return $dailyForecasts;
    }
}
