import { handleFlood } from './flood_logic';
import { setupDOM } from './setup';

export const table = new Array(14);
export const tiles = new Array(14);

export function createGrid (rowCount, colCount, numColors) {
    const gameContainer = setupDOM();
    const displayGrid = document.createElement('section');
    displayGrid.id = 'flood_grid';
    gameContainer.appendChild(displayGrid);

    for (let row = 0; row < rowCount; row++) {
        table[row] = new Array(colCount);
        const newRow = document.createElement('ul');
        newRow.className = 'row';
        tiles[row] = newRow;
        for (let col = 0; col < colCount; col++){
            const tileColor = colorClass(numColors);
            table[row][col] = { color: tileColor, flooded: false };
            tiles[row][col] = buildTile(tileColor, row, col, newRow);
        }
        displayGrid.appendChild(newRow);
    }
    table[0][0].flooded = true;
    tiles[0][0].flooded = true;
    handleFlood(null, tiles[0][0].className);
    
    return table;
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
