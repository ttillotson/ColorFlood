import { board, tiles } from './grid';
import { numRows, numCols } from './main';
import { maxMoves, test } from './setup.js';

// Call flood when creating grid to attach initial matches
export let moves = -1; 
let finished = false;

export function handleFlood(oldColor, newColor) {
    // Do nothing if clicked tile is original
    // Do nothing if game is over
    if (oldColor === newColor || finished) return;
    moves++;
    floodBoard(0, 0, newColor, moves);
    floodTile(0, 0, newColor, moves);
    gameOver();
    updateInfo();
}

function floodBoard(row, col, newColor, moveId) {
    board[row][col].flooded = true;
    board[row][col].color = newColor;
    board[row][col].lastChanged = moveId;
    floodBoardNeighbors(row, col, newColor, moveId);
}

function floodTile(row, col, color, moveId) {
    tiles[row][col].className = '';
    tiles[row][col].className = color;
    tiles[row][col].lastChanged = moveId;
    tiles[row][col].flooded = true;
    setTimeout(floodTileNeighbors.bind(null, ...arguments), 30);
}

function floodBoardNeighbors(row, col, color, moveId) {
    if (row < numRows - 1) toggleFlooded(row + 1, col, color, moveId);
    if (row > 0) toggleFlooded(row - 1, col, color, moveId);
    if (col < numCols - 1) toggleFlooded(row, col + 1, color, moveId);
    if (col > 0) toggleFlooded(row, col - 1, color, moveId);
}


function floodTileNeighbors(row, col, color, moveId) {
    if (row < numRows - 1) canBeFlooded(row + 1, col, color, moveId);
    if (row > 0) canBeFlooded(row - 1, col, color, moveId);
    if (col < numCols - 1) canBeFlooded(row, col + 1, color, moveId);
    if (col > 0) canBeFlooded(row, col - 1, color, moveId);
}

function toggleFlooded(row, col, color, moveId) {
    if ((board[row][col].color === color || board[row][col].flooded) && 
    (board[row][col].lastChanged === undefined || board[row][col].lastChanged !== moveId)){
        board[row][col].color = color;
        board[row][col].flooded = true;
        board[row][col].lastChanged = moveId;
        floodBoardNeighbors(...arguments);
    }
}


function canBeFlooded(row, col, color, moveId) {
    if ((tiles[row][col].className === color || tiles[row][col].flooded) && 
        (tiles[row][col].lastChanged === undefined || tiles[row][col].lastChanged !== moveId)){
        floodTile(row, col, color, moveId);    // Toggle Flood
    }
}

function floodedBoard() {
    for (let row = 0; row < numRows; row++){
        for (let col = 0; col < numCols; col++){
            if (!board[row][col].flooded) return;
        }
    }
    return true;
}

function gameOver() {
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
}

export function resetMoves() {
    moves = -1;
    finished = false;
}