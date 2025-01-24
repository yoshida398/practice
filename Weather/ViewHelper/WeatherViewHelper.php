<?php

class WeatherViewHelper
{
    public static function weatherList(array $data)
    {
        $weatherList = array();
        foreach ($data['list'] as $forecast) {
            $weatherList[] = array(
                'date' => $forecast['dt_txt'],
                'weather' => $forecast['weather'][0]['description'],
                'temp' => $forecast['main']['temp'],
                'humidity' => $forecast['main']['humidity'],
            );
        }

        return $weatherList;
    }
}