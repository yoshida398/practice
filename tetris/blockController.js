class blockController {

    blockFallComplete = false;

    moveLeft(position, area) {
        if(this.canMove(position, area).Left) {
            this.cleanBlock(position, area);
            position.forEach(position => {
                area[position.y][position.x - 1] = 1;
            });
        }

        return area;
    }

    moveRight(position, area) {
        if(this.canMove(position, area).Right) {
            this.cleanBlock(position, area);
            position.forEach(position => {
                area[position.y][position.x + 1] = 1;
            });
        }
        return area;
    }

    cleanBlock(position, area) {
        position.forEach(position => {
            area[position.y][position.x] = 0;
        });
    }

    moveDown(position, area) {
        // エリア情報と現在地とブロックで操作しているブロックとその位置を把握して下に一マス進む。
        if(this.canMove(position, area).Down) {
            this.cleanBlock(position, area);
            position.forEach(position => {
                area[position.y + 1][position.x] = 1;
            });
        }

        return area;
    }

    rotate(position, area) {
        // ブロックを右に回転させる
        // 最初の座標（最上行・最左列）を基準として回転を行う
        const minX = Math.min(...position.map(pos => pos.x)); // 最小のx座標
        const minY = Math.min(...position.map(pos => pos.y)); // 
        
        console.log(minX, minY);

        // 回転後の座標を保存する配列
        const rotatedposition = position.map(pos => ({
            x: minY + (pos.y - minY),
            y: minX - (pos.x - minX)
        }));

        // 新しいゲームエリアをコピー
        let newArea = area.map(row => row.slice());

        // 回転後の位置にブロックを配置
        rotatedposition.forEach(({ x, y }) => {
            if (newArea[y] && newArea[y][x] !== undefined) {
                newArea[y][x] = 1;  // 新しい位置にブロックを配置
            }
        });

        // もとの位置にあったブロックを消去
        position.forEach(({ x, y }) => {
            if (newArea[y] && newArea[y][x] !== undefined) {
                newArea[y][x] = 0;  // 元の位置を空にする
            }
        });

        return newArea;
    }

    canMove(position, area) {
        let result = { // resultの定義
            'Left': true,
            'Right': true,
            'Down': true
        };
        
        // 移動できるかどうかを判定する
        position.forEach(pos => {
            if (pos.y === 11) { 
                result.Right = false;
                result.Left = false;
                result.Down = false;
                this.blockFallComplete = true;
                return result;
            }
    
            if (pos.x === 7 || area[pos.y][pos.x + 1] === 2) {
                result.Right = false;
                return result;
            }
    
            if (pos.x === 0 || area[pos.y][pos.x - 1] === 2) {
                result.Left = false;
                return result;
            }

            if (area[pos.y + 1][pos.x] === 2) {
                result.Down = false;
                this.blockFallComplete = true;
                return result;
            }
        });

        return result; // 判定結果を返す
    }

    /**
     * 現在地を取得して各ブロックの座標を返す
     * @param {Array} area 現在のエリア情報
     * @returns {Array} ブロックごとの座標
     */
    findBlockPositions(area) {
        let position = [];
        for (let y = 0; y < area.length; y++) {
            for (let x = 0; x < area[y].length; x++) {
                if (area[y][x] === 1) {
                    position.push({ x, y });
                }
            }
        }
        return position;
    }

    /**
     * 初期のブロック配置
     * @param {Array} block 操作しているブロック
     * @param {Array} area 現在のエリア状態
     * @returns {Array} 更新したエリア情報
     */
    spawn(block, area) {
        this.blockFallComplete = false;
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