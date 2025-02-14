<?php

class WeatherViewHelper
{
    public static function weatherList(array $data)
    {
        $weatherList = array();
        foreach ($data['list'] as $forecast) {
            // 2025-2-3　18:00:00を日付と時間に分離する
            $date = explode(' ', $forecast['dt_txt'], 2);
            $weatherList[$date[0]][] = [
                'date' => $date[0],
                'day' => $date[1],
                'weather' => $forecast['weather'][0]['description'],
                'temp' => $forecast['main']['temp'],
                'humidity' => $forecast['main']['humidity'],
            ];
        }

        return $weatherList;
    }


}