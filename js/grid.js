import { handleFlood } from 'flood_logic';

// Function to build grid - 14 <ul> by 14 <li>
// - Assigns random tile color
// 
// 

const numRows = 14;
const numCol = 14;

export function createGrid (rowCount, colCount) {
    const table = new Array(rowCount);
    const tiles = new Array(rowCount);
    for (let row = 0; row < rowCount; row++) {
        const displayTable = document.getElementById('flood_grid');
        table[row] = new Array(colCount);
        const newRow = document.createElement('ul');
        tiles[row] = newRow;
        for (let col = 0; col < colCount; col++){
            const tileColor = colorClass();
            table[row][col] = { color: tileColor, flooded: false };
            tiles[row][col] = buildTile(tileColor, row, col, newRow);
        }
        displayTable.appendChild(newRow);
    }
    return table;
}

function buildTile(tileColor, row, col, parentEl) {
    let tile = document.createElement('li');
    tile.dataset.row = row;
    tile.dataset.col = col;
    tile.class = `tile ${tileColor}`;
    tile.onclick = handleFlood;
    parentEl.appendChild(tile);
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