import { moves, resetMoves } from './flood_logic';
import { createGrid } from './grid';
// import { numRows, numCols, numColors } from './main';

// DOM Setup

let maxMoves = 25;
export { maxMoves };

export function setupDOM() {
    const gameContainer = document.getElementById('game_container');
    const displayGrid = document.createElement('section');
    displayGrid.id = 'flood_grid';
    const infoAside = document.createElement('aside');
    infoAside.id = 'info';
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
    addInstructions(instructions);
    return gameContainer;
}

function addInstructions(instructionsContainer) {
    const instructions = document.createElement('p');
    instructions.innerHTML = "The goal of the game is to flood the map with a single color. Start from the top left corner and work your way across the grid in as few as turns as possible!";
    instructionsContainer.appendChild(instructions);
}

function createInfo(stateContainer) {
    const movesEl = document.createElement('h3');
    const instructionsEl = document.createElement('h4');
    movesEl.id = 'moves_counter';
    movesEl.className = 'top_space';
    movesEl.innerHTML = moves + '/' + maxMoves;
    instructionsEl.innerHTML = "Click a tile and try to flood the map!";
    // instructionsEl.className = 'top_space';
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
    newGameButton.onclick = createNewGame;

    let label = document.createElement('label');
    label.innerHTML= 'Color: ';
    label.appendChild(colorDropdown);
    // gridForm.appendChild(gridDropdown);
    gridForm.appendChild(label);
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

function createNewGame(e) {
    if (e) e.preventDefault();
    // const { numRows, numCols, numColors } = setGridSpecs();
    const { numColors } = setGridSpecs();
    const gameContainer = document.getElementById('game_container');
    const info = document.getElementById('info');
    const floodGrid = document.getElementById('flood_grid');
    gameContainer.removeChild(floodGrid);
    gameContainer.removeChild(info);
    resetMoves();
    setupDOM();
    createGrid(14, 14, numColors);
}



function setGridSpecs() {
    const colorDropdown = document.getElementById('color_count');
    // const gridDropdown = document.getElementById('grid_size');
    // numRows = Number(gridDropdown.value);
    // numCols = Number(gridDropdown.value);
    // numColors = Number(colorDropdown.value);

    // const newRows = Number(gridDropdown.value);
    // const newCols = Number(gridDropdown.value);
    const newColors = Number(colorDropdown.value);

    let defaultConditions = (14 + 14) * 6;
    // let gameConditions = (newRows + newCols) * newColors;
    let gameConditions = 28 * newColors;
    maxMoves = Math.floor(25 * (gameConditions / defaultConditions));
    // return { numRows: newRows, numCols: newCols, numColors: newColors };
    return { numColors: newColors };
}
