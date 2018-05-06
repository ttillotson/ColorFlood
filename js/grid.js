import { handleFlood } from './flood_logic';

export const board = new Array(14);
export let tiles;

export function createGrid (rowCount, colCount, numColors) {
    tiles = new Array(rowCount);
    const gameContainer = document.getElementById('game_container');
    const displayGrid = document.createElement('section');
    displayGrid.id = 'flood_grid';
    gameContainer.appendChild(displayGrid);

    for (let row = 0; row < rowCount; row++) {
        board[row] = new Array(colCount);
        const newRow = document.createElement('ul');
        newRow.className = 'row';
        tiles[row] = newRow;
        for (let col = 0; col < colCount; col++){
            const tileColor = colorClass(numColors);
            board[row][col] = { color: tileColor, flooded: false };
            tiles[row][col] = buildTile(tileColor, row, col, newRow);
        }
        displayGrid.appendChild(newRow);
    }
    board[0][0].flooded = true;
    tiles[0][0].flooded = true;
    handleFlood(null, tiles[0][0].className);
    
    return board;
}

function buildTile(tileColor, row, col, parentEl) {
    let tile = document.createElement('li');
    tile.row = row;
    tile.col = col;
    tile.id = 'tile';
    tile.flooded = false;
    tile.className = tileColor;
    const originTile = tiles[0][0] || tile;
    tile.onclick = () => handleFlood(originTile.className, tile.className);
    parentEl.appendChild(tile);
    return tile;
}

const tileColorClasses = [
    "purple",
    "red",
    "blue",
    "green",
    "orange",
    "yellow",
    "grey",
    "teal"
];

const colorClass = function (numColors) {
    return tileColorClasses[Math.floor(Math.random() * Math.floor(numColors))];
};
