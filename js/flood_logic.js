import { table, tiles } from './grid';
import { numRows, numCols } from './main';

export function handleFlood() {

}

function floodNeighbors(row, col, color) {
    if (row < numRows - 1) testFlood(row - 1, col, color);
    if (row > 0) testFlood(row + 1, col, color);
    if (col < numCols - 1) testFlood(row, col - 1, color);
    if (col > 0) testFlood(row, col + 1, color);
}

function testFlood(row, col, color) {
    
}