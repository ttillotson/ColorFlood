import { moves, resetMoves } from './flood_logic';
import { createGrid } from './grid';
// import { numRows, numCols, numColors } from './main';

// DOM Setup

let maxMoves = 16;
export { maxMoves };

export function setupDOM() {
    const gameContainer = document.getElementById('game_container');
    const leftContainer = document.getElementById('left_container');
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

    leftContainer.appendChild(infoAside);
    infoAside.appendChild(gameState);
    infoAside.appendChild(gridForm);
    infoAside.appendChild(completionContainer);
    infoAside.appendChild(instructions);

    createInfo(gameState);
    createGameParams(gridForm);
    addInstructions(instructions);
    addLinks();
    return gameContainer;
}

function addInstructions(instructionsContainer) {
    const instructions1 = document.createElement('p');
    const instructions2 = document.createElement('p');
    instructions1.innerHTML = "Start from the top left corner and work your way across the grid by clicking your neighbor's color and flooding the map.";
    instructions2.innerHTML = "Try to win in as few as turns as possible!";
    instructionsContainer.appendChild(instructions1);
    instructionsContainer.appendChild(instructions2);
}

function createInfo(stateContainer) {
    const movesEl = document.createElement('h3');
    const instructionsEl = document.createElement('h4');
    movesEl.id = 'moves_counter';
    movesEl.className = 'top_space';
    movesEl.innerHTML = moves + '/' + maxMoves;
    instructionsEl.innerHTML = "Click tiles and flood the map with a single color!";
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
    ["4", 4, true],
    ["5", 5],
    ["6", 6],
    ["7", 7],
    ["8", 8]
    ];

    const gridDropdown = createDropdown(gridSizes);
    gridDropdown.id = 'grid_size';
    const colorDropdown = createDropdown(colors);
    colorDropdown.id = 'color_count';
    colorDropdown.onchange = createNewGame;
    const newGameButton = document.createElement('input');
    newGameButton.type = "submit";
    newGameButton.value = 'New Game';
    newGameButton.onclick = createNewGame;

    let label = document.createElement('label');
    label.innerHTML= 'Colors: ';
    label.appendChild(colorDropdown);
    // gridForm.appendChild(gridDropdown);
    gridForm.appendChild(label);
    gridForm.appendChild(newGameButton);
}

function createDropdown(optionArr) {
    const dropDown = document.createElement('select');
    for (let i = 0; i < optionArr.length; i++) {
        const option = document.createElement('option');
        option.innerHTML = optionArr[i][0];
        option.value = optionArr[i][1];
        option.type = 'select';
        if (optionArr[i][2]) option.selected = true;
        dropDown.appendChild(option);
    }
    return dropDown;
}

function createNewGame(e) {
    if (e) e.preventDefault();
    // const { numRows, numCols, numColors } = setGridSpecs();
    const { numColors } = setGridSpecs();
    const gameContainer = document.getElementById('game_container');
    const floodGrid = document.getElementById('flood_grid');
    const completionContainer = document.getElementById('completion');
    if (completionContainer.firstChild) completionContainer.removeChild(completionContainer.firstChild);
    gameContainer.removeChild(floodGrid);
    resetMoves();
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

    let defaultConditions = (14 + 14) * 4;
    // let gameConditions = (newRows + newCols) * newColors;
    let gameConditions = 28 * newColors;
    maxMoves = Math.floor(16 * (gameConditions / defaultConditions));
    // return { numRows: newRows, numCols: newCols, numColors: newColors };
    return { numColors: newColors };
}

function addLinks() {
    const page = document.getElementById("page_container");

    const linksContainer = document.createElement('section');
    const linksContent = document.createElement('article');
    linksContainer.id = 'links_container';
    linksContent.className = 'links';

    const linkedIn = createLink("fab fa-linkedin", "https://www.linkedin.com/in/travis-tillotson");
    const gitHub = createLink("fab fa-github", "https://github.com/ttillotson/ColorFlood");

    page.appendChild(linksContainer);
    linksContainer.appendChild(linksContent);
    linksContent.appendChild(linkedIn);
    linksContent.appendChild(gitHub);
}

function createLink(className, url) {
    const link = document.createElement('a');
    link.href = url;
    const icon = document.createElement('i');
    icon.className = className;
    link.appendChild(icon);
    return link;
}