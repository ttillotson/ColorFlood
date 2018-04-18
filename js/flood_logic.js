import { table, tiles } from './grid';
import { numRows, numCols } from './main';

export let moves = -1;
let finished = false;

export function handleFlood(oldColor, newColor) {

}

function floodTile(row, col, color) {
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
        tiles[row][col].flooded = true;    // Toggle Flood
        floodNeighbors(row, col, color);   // Check the neighbors
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
    if (floodedBoard) {

    }
}