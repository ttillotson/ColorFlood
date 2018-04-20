import { setupDOM } from './setup';
import { createGrid } from './grid';


export let numRows = 14;
export let numCols = 14;
export let numColors = 6;

document.addEventListener('DOMContentLoaded', () => {
    setupDOM();
    createGrid(numRows, numCols, numColors);
});

