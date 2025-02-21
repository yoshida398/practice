import Block from '/practice/tetris/block.js';
import BlockController from '/practice/tetris/blockController.js';
import Show from '/practice/tetris/show.js';

class index {
    constructor() {
        this.block = new Block();
        this.show = new Show();
        this.gameArea = Array(12).fill().map(() => Array(8).fill(0)); // ゲームエリアの初期化
        this.blockController = new BlockController();
    }

    gameMaster() {
        // 1blockの操作(ゲームオーバーメソッドがtrueになるまでループ)
        this.block.createBlock();
        this.handleInput();
        this.startGame();
        this.show.showArea(this.gameArea);
        this.checkGameOver();
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
                this.gameArea = this.blockController.moveRight(this.position, this.gameArea)
            }

            if (event.key === 'ArrowDown') {
                this.position = this.blockController.findBlockPositions(this.gameArea);
                this.gameArea = this.blockController.moveDown(this.position, this.gameArea)
            }
            this.show.showArea(this.gameArea);
        });
    }

    clearFullLines() {
        // ライン削除処理
    }

    updateGameArea() {
        // ゲームエリア更新
        this.show.showArea(this.gameArea);
    }

    checkGameOver() {
        if(this.blockController.getBlockFallComplete()){
            this.startGame();
            this.gameMaster();
            return false;
        }
        return true;
    }
}

let gameMaster = new index();
// ゲーム終了までループ
gameMaster.gameMaster();