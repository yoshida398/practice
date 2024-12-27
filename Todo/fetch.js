document.getElementById('fetchButton').addEventListener('click', function() {
    // XMLHttpRequestオブジェクトを作成
    const xhr = new XMLHttpRequest();

    // リクエストを初期化
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1', true);

    // レスポンスを受け取ったときの処理
    xhr.onload = function() {
        if (xhr.status === 200) {
            // レスポンスデータをパースして表示
            const data = JSON.parse(xhr.responseText);
            document.getElementById('result').innerHTML = `
                <h2>${data.title}</h2>
                <p>${data.body}</p>
            `;
        } else {
            // エラーが発生した場合
            document.getElementById('result').textContent = 'データの取得に失敗しました。';
        }
    };

    // リクエストを送信
    xhr.send();
});