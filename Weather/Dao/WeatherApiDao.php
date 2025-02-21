<?php
require '../Dto/WeatherDto.php';
require '../../../apiconfig.php';

class WeatherApiDao 
{   
    public static function fetchWeather(): array
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

        $date = explode(' ', $data['list']['dt_txt'], 2);

        $dto = new WeatherDTO(
            date: $date[0],
            day: $date[1],
            weather: $data['list']['weather'][0]['description'],
            temp: $data['list']['main']['temp'],
            humidity: $data['list']['main']['humidity']
        );

        return $dto;
    }
}