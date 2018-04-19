import { createGrid } from './grid';
// import { setGridSpecs } from './setup';

export let numRows = 14;
export let numCols = 14;
export let numColors = 6;

document.addEventListener('DOMContentLoaded', () => {
    createGrid(numRows, numCols, numColors);
});

