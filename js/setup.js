import { moves } from './flood_logic';
import { numRows, numCols, numColors } from './main';
import { createGrid } from './grid';

// DOM Setup

export let maxMoves = 25;

export function setupDOM() {
    const infoAside = document.createElement('aside');
    infoAside.id = 'info';
    const gameContainer = document.getElementById('game_container');
    const gameState = document.createElement('article');
    gameState.id = 'game_state';
    const gridForm = document.createElement('form');
    gridForm.id = 'form';
    const completionContainer = document.createElement('article');
    completionContainer.id = 'completion';
    const instructions = document.createElement('article');
    instructions.id = 'instructions';

    gameContainer.appendChild(infoAside);
    infoAside.appendChild(gameState);
    infoAside.appendChild(gridForm);
    infoAside.appendChild(completionContainer);
    infoAside.appendChild(instructions);

    createInfo(gameState);
    createGameParams(gridForm);
    return gameContainer;
}

function createInfo(stateContainer) {
    const movesEl = document.createElement('h3');
    const instructionsEl = document.createElement('h4');
    movesEl.id = 'moves_counter';
    movesEl.innerHTML = moves + '/' + maxMoves;
    instructionsEl.innerHTML = "Click a tile and try to flood the map!";
    stateContainer.appendChild(instructionsEl);
    stateContainer.appendChild(movesEl);
}

function createGameParams(gridForm) {
    const gridSizes = [["6 x 6", 6],
    ["10 x 10", 10],
    ["14 x 14", 14, true],
    ["20 x 20", 20],
    ["25 x 25", 25],
    ["30 x 30", 30]
    ];
    const colors = [["3", 3],
    ["4", 4],
    ["5", 5],
    ["6", 6, true],
    ["7", 7],
    ["8", 8]
    ];

    const gridDropdown = createDropdown(gridSizes);
    gridDropdown.id = 'grid_size';
    const colorDropdown = createDropdown(colors);
    colorDropdown.id = 'color_count';
    const newGameButton = document.createElement('input');
    newGameButton.type = "submit";
    newGameButton.value = 'New Game';
    newGameButton.onclick = () => createNewGame();


    gridForm.appendChild(gridDropdown);
    gridForm.appendChild(colorDropdown);
    gridForm.appendChild(newGameButton);
    // Add logic to only Flood board if moves aren't above max
    // Prevents over-playing
}

function createDropdown(optionArr) {
    const dropDown = document.createElement('select');
    for (let i = 0; i < optionArr.length; i++) {
        const option = document.createElement('option');
        option.innerHTML = optionArr[i][0];
        option.value = optionArr[i][1];
        option.type = 'select';
        if (optionArr[i][2]) option.selected = true; // TEST THIS
        dropDown.appendChild(option);
    }
    return dropDown;
}

function createNewGame() {
    // const { numRows, numCols, numColors } = setGridSpecs();
    setGridSpecs();
    createGrid(numRows, numCols, numColors);
}



function setGridSpecs() {
    // let queryString = window.location.search;
    // if (queryString === null || queryString === "" || queryString == "?") return;
    // queryString = queryString.substr(1);
    // const gameParams = queryString.split("&");
    // for (let i = 0; i < gameParams.length; i++) {
    //     const param = gameParams[i].split("=");
    //     const paramName = param[0];
    //     const paramValue = param[1];
    //     if (paramName === 'size') {
    //         numCols = Number(paramValue);
    //         numRows = Number(paramValue);
    //     } else if (paramName === 'numColors') {
    //         numColors = Number(paramValue);
    //     }
    // }

    const colorDropdown = document.getElementById('color_count');
    const gridDropdown = document.getElementById('grid_size');
    debugger;
    const colorCount = colorDropdown.value;
    const gridSize = gridDropdown.value;


    let defaultConditions = (14 + 14) * 6;
    let gameConditions = (numRows + numCols) * numColors;
    maxMoves = Math.floor(25 * (gameConditions / defaultConditions));
    return { numRows: gridSize, numCols: gridSize, numColors: colorCount}
}