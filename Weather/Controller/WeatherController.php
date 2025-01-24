<?php

require '../Dao/WeatherApiDao.php';
require '../Dto/Weather.php';
require '../ViewHelper/WeatherViewHelper.php';

WeatherController::weatherAction();

class WeatherController 
{
    public static function weatherAction()
    {
        $data = WeatherApiDao::fetchWeather();
        $weatherList = WeatherViewHelper::weatherList($data);

        foreach ($weatherList as $weather) {
            echo "<div class='weather-card'>";
            echo "<h3>" . $weather['date'] . "</h3>";
            echo "<p><strong>天気:</strong>" . $weather['weather'] . "</p>";
            echo "<p><strong>気温:</strong>" . $weather['temp'] . "</p>";
            echo "<p><strong>湿度:</strong>" . $weather['humidity'] . "</p>";
            echo "</div>";
        }        
    }
}