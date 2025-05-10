<?php
class WeatherDTO {
    private $date;
    private $day;
    private $weather;
    private $temp;
    private $humidity;

    public function __construct(
        string $date,
        string $day,
        string $weather,
        float $temp,
        float $humidity
    ) {
        $this->date = $date;
        $this->day = $day;
        $this->weather = $weather;
        $this->temp = $temp;
        $this->humidity = $humidity;
    }

    public function getDate() {
        return $this->date;
    }

    public function getDay() {
        return $this->day;
    }

    public function getWeather() {
        return $this->weather;
    }

    public function getTemp() {
        return $this->temp;
    }

    public function getHumidity() {
        return $this->humidity;
    }
}
