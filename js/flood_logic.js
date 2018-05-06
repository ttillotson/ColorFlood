import { board, tiles } from './grid';
import { numRows, numCols } from './main';
import { maxMoves, test } from './setup.js';
import debounce from 'lodash.debounce';

// Call flood when creating grid to attach initial matches
export let moves = -1; 
let finished = false;

export function handleFlood(oldColor, newColor) {
    if (finished || moves >= maxMoves) return;
    // Do nothing if clicked tile is original
    if (oldColor === newColor) return;
    moves++;
    // for (let row = 0; row < numRows; row++) {
    //     for (let col = 0; col < numCols; col++) {
    //         if (tiles[row][col].flooded) {
    //             floodTile(row, col, newColor);
    //             floodNeighbors(row, col, newColor);
    //         }
    //     }
    // }
    floodBoard(newColor);
    floodTile(0, 0, newColor, moves);
    // gameOver();
    updateInfo();
}

function floodBoard(newColor) {
    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if (board[row][col].flooded || board[row][col].color === newColor) {
                board[row][col].flooded = true;
                board[row][col].color = newColor;
            }
        }
    }
    gameOver();
}

function floodTile(row, col, color, moveId) {
    tiles[row][col].className = '';
    tiles[row][col].className = color;
    tiles[row][col].lastChanged = moveId;
    tiles[row][col].flooded = true;
    // debugger;
    // gameOver();
    setTimeout(floodNeighbors.bind(null, ...arguments), 30);
    // // floodNeighbors.bind(null, ...arguments)();
}


function floodNeighbors(row, col, color, moveId) {
    if (row < numRows - 1) canBeFlooded(row + 1, col, color, moveId);
    if (row > 0) canBeFlooded(row - 1, col, color, moveId);
    if (col < numCols - 1) canBeFlooded(row, col + 1, color, moveId);
    if (col > 0) canBeFlooded(row, col - 1, color, moveId);
}

function canBeFlooded(row, col, color, moveId) {
    // if (tiles[row][col].flooded) return; // Skip if it is already flooded
    if ((tiles[row][col].className === color || tiles[row][col].flooded) && 
        (tiles[row][col].lastChanged === undefined || tiles[row][col].lastChanged !== moveId)){
        floodTile(row, col, color, moveId);    // Toggle Flood
        // setTimeout(floodNeighbors(row, col, color), 2000);   // Check the neighbors
    }
}

function floodedBoard() {
    for (let row = 0; row < numRows; row++){
        for (let col = 0; col < numCols; col++){
            // console.log(board);
            console.log(board[row][col].flooded);
            console.log(`${row} ${col}`);
            if (!board[row][col].flooded) return;

        }
    }
    // finished = true;
    return true;
}

function gameOver() {
    // floodedBoard();
    // console.log('called');
    if (floodedBoard()){
        finished = true;
        victory();
    } else if (moves >= maxMoves) {
        finished = true;
        defeat();
    }
} 

function victory() {
    const completionContainer = document.getElementById('completion');
    const won = document.createElement('h4');
    won.className = 'title_green';
    won.innerHTML = "You Won!";
    if (!completionContainer.firstChild) completionContainer.appendChild(won);
}

function defeat() {
    const completionContainer = document.getElementById('completion');
    const loss = document.createElement('h4');
    loss.className = 'title_red';
    loss.innerHTML = "You Lost!";
    if (!completionContainer.firstChild) completionContainer.appendChild(loss);
}

function updateInfo() {
    const infoEl = document.getElementById('info');
    const movesEl = document.getElementById('moves_counter');
    movesEl.innerHTML = moves + '/' + maxMoves;
    // gameOver();
}

export function resetMoves() {
    moves = -1;
    finished = false;
}