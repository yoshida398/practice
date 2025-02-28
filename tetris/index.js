import Block from '/practice/tetris/block.js';
import BlockController from '/practice/tetris/blockController.js';
import Show from '/practice/tetris/show.js';

class index {
    constructor() {
        this.block = new Block();
        this.show = new Show();
        this.gameArea = Array(12).fill().map(() => Array(8).fill(0));
        this.blockController = new BlockController();
    }

    gameMaster() {
        // 1blockの操作(ゲームオーバーメソッドがtrueになるまでループ)
        this.block.createBlock();
        this.handleInput();
        this.startGame();
        this.show.showArea(this.gameArea);
    }

    startGame() {
        // 初期ブロックの生成
        this.block.generateBlocks();
        this.nextBlockList = this.block.getNextBlock();

        // 初期リスポーン処理
        this.gameArea = this.blockController.spawn(this.nextBlockList[0]['shape'], this.gameArea);       
    }

    handleInput() {
        // ユーザー入力処理
        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowLeft') {
                this.position = this.blockController.findBlockPositions(this.gameArea);
                this.gameArea = this.blockController.moveLeft(this.position, this.gameArea);
            }

            if (event.key === 'ArrowRight') {
                this.position = this.blockController.findBlockPositions(this.gameArea);
                this.gameArea = this.blockController.moveRight(this.position, this.gameArea);
            }

            if (event.key === 'ArrowDown') {
                this.position = this.blockController.findBlockPositions(this.gameArea);
                this.gameArea = this.blockController.moveDown(this.position, this.gameArea);
            }

            if (event.key === 'ArrowUp') {
                this.position = this.blockController.findBlockPositions(this.gameArea);
                this.gameArea = this.blockController.rotate(this.position, this.gameArea);
            }

            if (this.blockController.blockFallComplete) {
                this.checkGameOver();
            }
            this.show.showArea(this.gameArea);
        });
    }

    clearFullLines() {
        // ライン削除処理
    }

    updateGameArea() {
        // ブロックの更新処理
        for (let i = 0; i < this.gameArea.length; i++) {
            for (let j = 0; j < this.gameArea[i].length; j++) {
                if (this.gameArea[i][j] === 1) {
                    this.gameArea[i][j] = 2;
                }
            }
        }
        this.block.updateNextBlock();
    }

    checkGameOver() {
        this.updateGameArea();
        this.startGame();
    }
}

let gameMaster = new index();
gameMaster.gameMaster();