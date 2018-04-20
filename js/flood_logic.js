import { table, tiles } from './grid';
import { numRows, numCols } from './main';
import { maxMoves, test } from './setup.js';

// Call flood when creating grid to attach initial matches
export let moves = -1; 
let finished = false;

export function handleFlood(oldColor, newColor) {
    if (finished || moves >= maxMoves) return;
    // Do nothing if clicked tile is original
    if (oldColor === newColor) return;
    moves++;
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (tiles[row][col].flooded) {
                floodTile(row, col, newColor);
                setInterval(floodNeighbors(row, col, newColor), 40000);
            }
        }
    }
    gameOver();
    updateInfo();
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
        // setTimeout(floodNeighbors(row, col, color), 2000);   // Check the neighbors
    }
}

function floodedBoard(){
    for (let row = 0; row < numRows; row++){
        for (let col = 0; col < numCols; col++){
            if (!tiles[row][col].flooded) return;
        }
    }
    finished = true;
    return true;
}

function gameOver() {
    floodedBoard();
    if (floodedBoard()){
        victory();

    } else if (moves >= maxMoves) {
        defeat();
    }
} 

function victory() {
    const completionContainer = document.getElementById('completion');
    const won = document.createElement('h4');
    won.className = 'title_green';
    won.innerHTML = "You Won!";
    completionContainer.appendChild(won);
}

function defeat() {
    const completionContainer = document.getElementById('completion');
    const loss = document.createElement('h4');
    loss.className = 'title_red';
    loss.innerHTML = "You Lost!";
    completionContainer.appendChild(loss);
}

function updateInfo() {
    const infoEl = document.getElementById('info');
    const movesEl = document.getElementById('moves_counter');
    movesEl.innerHTML = moves + '/' + maxMoves;
}

export function resetMoves() {
    moves = -1;
    finished = false;
}