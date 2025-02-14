class Block {
    static BlockPattern = {
        'YELLOW': [[0, 1, 1, 0], [0, 1, 1, 0]],
        'LIGHTBLUE': [[1, 1, 1, 1], [0, 0, 0, 0]],
        'PURPLE': [[0, 1, 0, 0], [1, 1, 1, 0]],
        'ORANGE': [[0, 0, 1, 0], [1, 1, 1, 0]],
        'DARKBLUE': [[1, 0, 0, 0], [1, 1, 1, 0]],
        'GREEN': [[0, 1, 1, 0], [1, 1, 0, 0]],
        'RED': [[1, 1, 0, 0], [0, 1, 1, 0]]
    };

    constructor() {
        this.nextBlockList = [];
    }

    createBlock() {
        let color = Object.keys(Block.BlockPattern);
        let randomColor = color[Math.floor(Math.random() * color.length)];

        let blockShape = Block.BlockPattern[randomColor];
        this.nextBlockList.push({ color: randomColor, shape: blockShape });

        return this;
    }

    generateBlocks() {
        while (this.nextBlockList.length < 5) {
            this.createBlock();
        }
    }

    getNextBlock() {
        return this.nextBlockList;
    }
}

export default Block;