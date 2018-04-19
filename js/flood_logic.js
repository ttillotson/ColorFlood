import { table, tiles } from './grid';
import { numRows, numCols, maxMoves } from './main';

export let moves = -1;    // Call flood when creating grid to attach initial matches
let finished = false;


export function displayInfo() {
    const infoEl = document.getElementById('info');
    const movesEl = document.createElement('h3');
    const instructionsEl = document.createElement('h4');

    movesEl.innerHTML = moves + '/' + maxMoves;
    instructionsEl.innerHTML = "Click a tile and try to flood the map!";

    infoEl.appendChild(movesEl);
    if (moves < 1) infoEl.appendChild(instructionsEl);
    
}

export function handleFlood(oldColor, newColor) {
    if (finished) return;
    // Do nothing if clicked tile is original
    if (oldColor === newColor) return;
    moves++;
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (tiles[row][col].flooded) {
                floodTile(row, col, newColor);
                floodNeighbors(row, col, newColor);
            }
        }
    }
    gameOver();
    displayInfo();
}

function floodTile(row, col, color) {
    tiles[row][col].className = '';
    tiles[row][col].className = color;
    tiles[row][col].flooded = true;
}

function floodNeighbors(row, col, color) {
    if (row < numRows - 1) canBeFlooded(row + 1, col, color);
    if (row > 0) canBeFlooded(row - 1, col, color);
    if (col < numCols - 1) canBeFlooded(row, col + 1, color);
    if (col > 0) canBeFlooded(row, col - 1, color);
}

function canBeFlooded(row, col, color) {
    if (tiles[row][col].flooded) return; // Skip if it is already flooded
    if (tiles[row][col].className === color){
        floodTile(row, col, color);    // Toggle Flood
        setTimeout(floodNeighbors(row, col, color), 15);   // Check the neighbors
    }
}

function floodedBoard(){
    for (let row = 0; row < numRows; row++){
        for (let col = 0; col < numCols; col++){
            if (!tiles[row][col].flooded) return;
        }
    }
    finished = true;
}

function gameOver() {
    floodedBoard();
    if (finished){
        if (moves <= maxMoves) {
            alert('You won!');
        } else {
            alert('You Lost!');
        }
    }
}