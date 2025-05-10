<?php

class WeatherApiDao 
{
    private const LAT = "35";
    private const LON = "139";
    private const API_KEY = "1fa5058328ec8646bb6597829bbfc7e6";
    private const BASE_URL = "https://api.openweathermap.org/data/2.5/forecast";
    
    public static function fetchWeather()
    {
        $url = sprintf(
            "%s?lat=%s&lon=%s&appid=%s&units=metric&lang=ja",
            self::BASE_URL,
            self::LAT,
            self::LON,
            self::API_KEY
        );

        $response = file_get_contents($url);
        $data = json_decode($response, true);

        return $data;
    }
}