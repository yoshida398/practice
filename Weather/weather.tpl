<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>天気情報取得</title>
    <link rel="stylesheet" href="../../Common/reset.css" type="text/css">
    <link rel="stylesheet" href="../weather.css" type="text/css">
</head>
<body>
<div class="weather">
    <div class="weather__title">6日間の天気</div>
    <div class="weather__days">
        {foreach from=$weatherList key=date item=forecasts}
        <div class="weather__day">
            <input type="checkbox" id="accordion-{$date}" class="weather__input">
            <label for="accordion-{$date}" class="weather__btn">
                <span class="weather__date">{$date}</span>
            </label>
            <div class="weather__items">
            {foreach from=$forecasts item=forecast}
                <div class="weather__item">
                    <p>時間: {$forecast.day}</p>
                    <p>天気: {$forecast.weather}</p>
                    <p>気温: {$forecast.temp}°C</p>
                    <p>湿度: {$forecast.humidity}%</p>
                </div>
            {/foreach}
            </div>
        </div>
        {/foreach}
    </div>
</div>
</body>
</html>
