document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "1fa5058328ec8646bb6597829bbfc7e6";
    const fetchWeatherButton = document.getElementById("fetchWeatherButton");
    const weatherOutput = document.getElementById("weatherOutput");
    const showMoreButton = document.getElementById("showMoreButton");

    fetchWeatherButton.addEventListener("click", function () {
        const xhr = new XMLHttpRequest();
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=${apiKey}&units=metric&lang=ja`;

        xhr.open("GET", url, true);
        weatherOutput.innerHTML = "<p>天気情報を取得中...</p>";
        showMoreButton.style.display = "none"; // 初期状態で非表示

        xhr.onload = function () {
            if (xhr.status === 200) {
                try {
                    const data = JSON.parse(xhr.responseText);

                    // 日付ごとにまとめる
                    const dailyForecasts = {};
                    data.list.forEach((item) => {
                        const date = item.dt_txt.split(" ")[0];
                        if (!dailyForecasts[date]) {
                            dailyForecasts[date] = [];
                        }
                        dailyForecasts[date].push(item);
                    });

                    // 出力の準備
                    weatherOutput.innerHTML = "<h2>天気予報</h2>";

                    let isFirstDay = true;
                    Object.entries(dailyForecasts).forEach(([date, forecasts]) => {
                        const morningForecast = forecasts.find((f) =>
                            f.dt_txt.includes("09:00:00")
                        ); // 午前9時のデータを取得

                        if (morningForecast) {
                            const forecastHTML = `
                                <div class="forecast" data-visible="${isFirstDay}">
                                    <h3>${date}</h3>
                                    <p><strong>天気:</strong> ${morningForecast.weather[0].description}</p>
                                    <p><strong>気温:</strong> ${morningForecast.main.temp}℃</p>
                                    <p><strong>湿度:</strong> ${morningForecast.main.humidity}%</p>
                                </div>
                            `;
                            weatherOutput.innerHTML += forecastHTML;
                            isFirstDay = false;
                        }
                    });

                    // 「もっと見る」ボタンを表示
                    showMoreButton.style.display = "block";
                } catch (error) {
                    weatherOutput.innerHTML = "<p>データの解析中にエラーが発生しました。</p>";
                }
            } else {
                weatherOutput.innerHTML = "<p>天気情報の取得に失敗しました。</p>";
            }
        };

        xhr.send();

        // 「もっと見る」ボタンのイベントリスナー
        showMoreButton.addEventListener("click", function () {
            showMoreButtonHandler();
        });
    });
});

function showMoreButtonHandler() {
    const hiddenForecasts = document.querySelectorAll(
        '.forecast[data-visible="false"]'
    );
    hiddenForecasts.forEach((forecast) => {
        forecast.setAttribute("data-visible", "true");
        forecast.style.display = "block";
    });

    // ボタンを隠す
    const showMoreButton = document.getElementById("showMoreButton");
    showMoreButton.style.display = "none";
}