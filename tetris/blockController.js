class blockController {
    moveLeft(position, area) {
        //if(this.canMove()) {
            this.cleanBlock(position, area);
            position.forEach(position => {
                area[position.y][position.x - 1] = 1;
            });
        //}

        return area;
    }

    moveRight(position, area) {
        //if(this.canMove()) {
            this.cleanBlock(position, area);
            position.forEach(position => {
                area[position.y][position.x + 1] = 1;
            });
        //}
        return area;
    }

    cleanBlock(position, area) {
        position.forEach(position => {
            area[position.y][position.x] = 0;
        });
    }

    moveDown(position, area) {
        // エリア情報と現在地とブロックで操作しているブロックとその位置を把握して下に一マス進む。
        //if(this.canMove()) {
            this.cleanBlock(position, area);
            position.forEach(position => {
                area[position.y + 1][position.x] = 1;
            });
        //}

        return area;
    }

    rotate(block) {
        // ブロックを右に回転させる
    }

    canMove() {
        // 移動できるかどうかを判定する
    }

    /**
     * 現在地を取得して各ブロックの座標を返す
     * @param {Array} area 現在のエリア情報
     * @returns {Array} ブロックごとの座標
     */
    findBlockPositions(area) {
        let positions = [];
        for (let y = 0; y < area.length; y++) {
            for (let x = 0; x < area[y].length; x++) {
                if (area[y][x] === 1) {
                    positions.push({ x, y });
                }
            }
        }
        return positions;
    }

    /**
     * 初期のブロック配置
     * @param {Array} block 操作しているブロック
     * @param {Array} area 現在のエリア状態
     * @returns {Array} 更新したエリア情報
     */
    spawn(block, area) {
        for (let y = 0; y < block.length; y++) {
            for (let x = 0; x < block[y].length; x++) {
                if (block[y][x] === 1) {
                    area[y][x + 2] = 1;
                }
            }
        }

        return area;
    }
}

export default blockController;