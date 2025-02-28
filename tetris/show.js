class Show {
    showArea(area) {
        const tableBody = document.querySelector(".gameArea__contents");

        // 既存のテーブルの行を削除（上書きするため）
        tableBody.innerHTML = '';

        area.forEach((arr) => {
            const row = document.createElement("tr");

            arr.forEach((value) => {
                const valueCell = document.createElement("td");
                valueCell.classList.add("gameArea__cell");

                if (value === 0) {
                    valueCell.classList.add("gameArea__cell--space");
                } else if (value === 1) {
                    valueCell.classList.add("gameArea__cell--block");
                } else if (value === 2) {
                    valueCell.classList.add("gameArea__cell--oldBlock");
                }

                row.appendChild(valueCell);
            });

            tableBody.appendChild(row);
        });
    }
}

export default Show;