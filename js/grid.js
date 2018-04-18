import { handleFlood } from './flood_logic';

export const table = new Array(14);
export const tiles = new Array(14);

export function createGrid (rowCount, colCount) {
    for (let row = 0; row < rowCount; row++) {
        const displayTable = document.getElementById('flood_grid');
        table[row] = new Array(colCount);
        const newRow = document.createElement('ul');
        newRow.className = 'row';
        tiles[row] = newRow;
        for (let col = 0; col < colCount; col++){
            const tileColor = colorClass();
            table[row][col] = { color: tileColor, flooded: false };
            tiles[row][col] = buildTile(tileColor, row, col, newRow);
        }
        displayTable.appendChild(newRow);
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
    tile.className = `${tileColor}`;
    const originTile = tiles[0][0] || tile;
    tile.onclick = () => handleFlood(originTile.className, tile.className);
    parentEl.appendChild(tile);
    return tile;
}

const tileColorClasses = [
    "purple",
    "blue",
    "green",
    "red",
    "yellow",
    "orange"
];

const colorClass = function () {
    return tileColorClasses[Math.floor(Math.random() * Math.floor(6))];
};