import { createGrid } from './grid';

export let numRows = 14;
export let numCols = 14;
export let numColors = 6;
export let maxMoves = 25;

function setGridSpecs() {
    let queryString = window.location.search;
    if (queryString === null || queryString === "" || queryString == "?") return;
    queryString = queryString.substr(1);
    const gameParams = queryString.split("&");
    for (let i = 0; i < gameParams.length; i++) {
        const param = gameParams[i].split("=");
        const paramName = param[0];
        const paramValue = param[1];
        if (paramName === 'size') {
            numCols = Number(paramValue);
            numRows = Number(paramValue);
        } else if (paramName === 'numColors') {
            numColors = Number(paramValue);
        }
    }
    let defaultConditions = (14 + 14) * 6;
    let gameConditions = (numRows + numCols) * numColors;
    maxMoves = Math.floor(25 * (gameConditions / defaultConditions));
}

document.addEventListener('DOMContentLoaded', () => {
    setGridSpecs();
    createGrid(numRows, numCols, numColors);
});

