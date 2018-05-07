/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return tiles; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createGrid;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flood_logic__ = __webpack_require__(3);


const board = new Array(14);
/* harmony export (immutable) */ __webpack_exports__["a"] = board;

let tiles;

function createGrid (rowCount, colCount, numColors) {
    tiles = new Array(rowCount);
    const gameContainer = document.getElementById('game_container');
    const displayGrid = document.createElement('section');
    displayGrid.id = 'flood_grid';
    gameContainer.appendChild(displayGrid);

    for (let row = 0; row < rowCount; row++) {
        board[row] = new Array(colCount);
        const newRow = document.createElement('ul');
        newRow.className = 'row';
        tiles[row] = newRow;
        for (let col = 0; col < colCount; col++){
            const tileColor = colorClass(numColors);
            board[row][col] = { color: tileColor, flooded: false };
            tiles[row][col] = buildTile(tileColor, row, col, newRow);
        }
        displayGrid.appendChild(newRow);
    }
    board[0][0].flooded = true;
    tiles[0][0].flooded = true;
    Object(__WEBPACK_IMPORTED_MODULE_0__flood_logic__["a" /* handleFlood */])(null, tiles[0][0].className);
    
    return board;
}

function buildTile(tileColor, row, col, parentEl) {
    let tile = document.createElement('li');
    tile.row = row;
    tile.col = col;
    tile.id = 'tile';
    tile.flooded = false;
    tile.className = tileColor;
    const originTile = tiles[0][0] || tile;
    tile.onclick = () => Object(__WEBPACK_IMPORTED_MODULE_0__flood_logic__["a" /* handleFlood */])(originTile.className, tile.className);
    parentEl.appendChild(tile);
    return tile;
}

const tileColorClasses = [
    "purple",
    "red",
    "blue",
    "green",
    "orange",
    "yellow",
    "grey",
    "teal"
];

const colorClass = function (numColors) {
    return tileColorClasses[Math.floor(Math.random() * Math.floor(numColors))];
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numRows", function() { return numRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numCols", function() { return numCols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numColors", function() { return numColors; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setup__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid__ = __webpack_require__(0);




let numRows = 14;
let numCols = 14;
let numColors = 4;

document.addEventListener('DOMContentLoaded', () => {
    Object(__WEBPACK_IMPORTED_MODULE_0__setup__["b" /* setupDOM */])();
    Object(__WEBPACK_IMPORTED_MODULE_1__grid__["b" /* createGrid */])(numRows, numCols, numColors);
    // createInfo();
});



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return maxMoves; });
/* harmony export (immutable) */ __webpack_exports__["b"] = setupDOM;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flood_logic__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grid__ = __webpack_require__(0);


// import { numRows, numCols, numColors } from './main';

// DOM Setup

let maxMoves = 16;


function setupDOM() {
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
    movesEl.innerHTML = __WEBPACK_IMPORTED_MODULE_0__flood_logic__["b" /* moves */] + '/' + maxMoves;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__flood_logic__["c" /* resetMoves */])();
    Object(__WEBPACK_IMPORTED_MODULE_1__grid__["b" /* createGrid */])(14, 14, numColors);
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

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return moves; });
/* harmony export (immutable) */ __webpack_exports__["a"] = handleFlood;
/* harmony export (immutable) */ __webpack_exports__["c"] = resetMoves;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup_js__ = __webpack_require__(2);




// Call flood when creating grid to attach initial matches
let moves = -1; 
let finished = false;

function handleFlood(oldColor, newColor) {
    // Do nothing if clicked tile is original
    // Do nothing if game is over
    if (oldColor === newColor || finished) return;
    moves++;
    floodBoard(0, 0, newColor, moves);
    floodTile(0, 0, newColor, moves);
    gameOver();
    updateInfo();
}

function floodBoard(row, col, newColor, moveId) {
    __WEBPACK_IMPORTED_MODULE_0__grid__["a" /* board */][row][col].flooded = true;
    __WEBPACK_IMPORTED_MODULE_0__grid__["a" /* board */][row][col].color = newColor;
    __WEBPACK_IMPORTED_MODULE_0__grid__["a" /* board */][row][col].lastChanged = moveId;
    floodBoardNeighbors(row, col, newColor, moveId);
}

function floodTile(row, col, color, moveId) {
    __WEBPACK_IMPORTED_MODULE_0__grid__["c" /* tiles */][row][col].className = '';
    __WEBPACK_IMPORTED_MODULE_0__grid__["c" /* tiles */][row][col].className = color;
    __WEBPACK_IMPORTED_MODULE_0__grid__["c" /* tiles */][row][col].lastChanged = moveId;
    __WEBPACK_IMPORTED_MODULE_0__grid__["c" /* tiles */][row][col].flooded = true;
    setTimeout(floodTileNeighbors.bind(null, ...arguments), 30);
}

function floodBoardNeighbors(row, col, color, moveId) {
    if (row < __WEBPACK_IMPORTED_MODULE_1__main__["numRows"] - 1) toggleFlooded(row + 1, col, color, moveId);
    if (row > 0) toggleFlooded(row - 1, col, color, moveId);
    if (col < __WEBPACK_IMPORTED_MODULE_1__main__["numCols"] - 1) toggleFlooded(row, col + 1, color, moveId);
    if (col > 0) toggleFlooded(row, col - 1, color, moveId);
}


function floodTileNeighbors(row, col, color, moveId) {
    if (row < __WEBPACK_IMPORTED_MODULE_1__main__["numRows"] - 1) canBeFlooded(row + 1, col, color, moveId);
    if (row > 0) canBeFlooded(row - 1, col, color, moveId);
    if (col < __WEBPACK_IMPORTED_MODULE_1__main__["numCols"] - 1) canBeFlooded(row, col + 1, color, moveId);
    if (col > 0) canBeFlooded(row, col - 1, color, moveId);
}

function toggleFlooded(row, col, color, moveId) {
    if ((__WEBPACK_IMPORTED_MODULE_0__grid__["a" /* board */][row][col].color === color || __WEBPACK_IMPORTED_MODULE_0__grid__["a" /* board */][row][col].flooded) && 
    (__WEBPACK_IMPORTED_MODULE_0__grid__["a" /* board */][row][col].lastChanged === undefined || __WEBPACK_IMPORTED_MODULE_0__grid__["a" /* board */][row][col].lastChanged !== moveId)){
        __WEBPACK_IMPORTED_MODULE_0__grid__["a" /* board */][row][col].color = color;
        __WEBPACK_IMPORTED_MODULE_0__grid__["a" /* board */][row][col].flooded = true;
        __WEBPACK_IMPORTED_MODULE_0__grid__["a" /* board */][row][col].lastChanged = moveId;
        floodBoardNeighbors(...arguments);
    }
}


function canBeFlooded(row, col, color, moveId) {
    if ((__WEBPACK_IMPORTED_MODULE_0__grid__["c" /* tiles */][row][col].className === color || __WEBPACK_IMPORTED_MODULE_0__grid__["c" /* tiles */][row][col].flooded) && 
        (__WEBPACK_IMPORTED_MODULE_0__grid__["c" /* tiles */][row][col].lastChanged === undefined || __WEBPACK_IMPORTED_MODULE_0__grid__["c" /* tiles */][row][col].lastChanged !== moveId)){
        floodTile(row, col, color, moveId);    // Toggle Flood
    }
}

function floodedBoard() {
    for (let row = 0; row < __WEBPACK_IMPORTED_MODULE_1__main__["numRows"]; row++){
        for (let col = 0; col < __WEBPACK_IMPORTED_MODULE_1__main__["numCols"]; col++){
            if (!__WEBPACK_IMPORTED_MODULE_0__grid__["a" /* board */][row][col].flooded) return;
        }
    }
    return true;
}

function gameOver() {
    if (floodedBoard()){
        finished = true;
        victory();
    } else if (moves >= __WEBPACK_IMPORTED_MODULE_2__setup_js__["a" /* maxMoves */]) {
        finished = true;
        defeat();
    }
} 

function victory() {
    const completionContainer = document.getElementById('completion');
    const won = document.createElement('h4');
    won.className = 'title_green';
    won.innerHTML = "You Won!";
    if (!completionContainer.firstChild) completionContainer.appendChild(won);
}

function defeat() {
    const completionContainer = document.getElementById('completion');
    const loss = document.createElement('h4');
    loss.className = 'title_red';
    loss.innerHTML = "You Lost!";
    if (!completionContainer.firstChild) completionContainer.appendChild(loss);
}

function updateInfo() {
    const infoEl = document.getElementById('info');
    const movesEl = document.getElementById('moves_counter');
    movesEl.innerHTML = moves + '/' + __WEBPACK_IMPORTED_MODULE_2__setup_js__["a" /* maxMoves */];
}

function resetMoves() {
    moves = -1;
    finished = false;
}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map