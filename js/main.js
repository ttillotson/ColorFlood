import { createGrid } from './grid';

export const numRows = 14;
export const numCols = 14;
document.addEventListener('DOMContentLoaded', () => {

    createGrid(numRows, numCols);
});

