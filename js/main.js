import { setupDOM } from './setup';
import { createGrid, createInfo } from './grid';


export let numRows = 14;
export let numCols = 14;
export let numColors = 4;

document.addEventListener('DOMContentLoaded', () => {
    setupDOM();
    createGrid(numRows, numCols, numColors);
    // createInfo();
});

