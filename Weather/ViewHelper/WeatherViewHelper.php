<?php

class WeatherViewHelper
{
    private array $sunnyList = ['晴天'];
    private array $cloudList = ['曇りがち', '雲', '薄い雲', '厚い雲'];
    private array $rainList = ['小雨','適度な雨'];

    public static function weatherList(array $data): array
    {
        $weatherList = [];
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