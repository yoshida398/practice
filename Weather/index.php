<?php
$apiKey = "1fa5058328ec8646bb6597829bbfc7e6";
$lat = 35;
$lon = 139;
$apiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=$lat&lon=$lon&appid=$apiKey&units=metric&lang=ja";

$response = file_get_contents($apiUrl);
$data = json_decode($response, true);

echo "<h1>天気予報</h1>";
foreach ($data['list'] as $forecast) {
    $date = explode(" ", $forecast['dt_txt'])[0];
    $weather = $forecast['weather'][0]['description'];
    $temp = $forecast['main']['temp'];
    $humidity = $forecast['main']['humidity'];

    echo "<div class='weather-card'>";
    echo "<h3>$date</h3>";
    echo "<p><strong>天気:</strong> $weather</p>";
    echo "<p><strong>気温:</strong> $temp ℃</p>";
    echo "<p><strong>湿度:</strong> $humidity%</p>";
    echo "</div>";
}