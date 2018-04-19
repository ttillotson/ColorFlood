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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numRows", function() { return numRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numCols", function() { return numCols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numColors", function() { return numColors; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid__ = __webpack_require__(1);

// import { setGridSpecs } from './setup';

let numRows = 14;
let numCols = 14;
let numColors = 6;

document.addEventListener('DOMContentLoaded', () => {
    Object(__WEBPACK_IMPORTED_MODULE_0__grid__["a" /* createGrid */])(numRows, numCols, numColors);
});



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createGrid;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flood_logic__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__setup__ = __webpack_require__(3);



const table = new Array(14);
/* unused harmony export table */

const tiles = new Array(14);
/* harmony export (immutable) */ __webpack_exports__["b"] = tiles;


function createGrid (rowCount, colCount, numColors) {
    const gameContainer = Object(__WEBPACK_IMPORTED_MODULE_1__setup__["b" /* setupDOM */])();
    const displayGrid = document.createElement('section');
    displayGrid.id = 'flood_grid';
    gameContainer.appendChild(displayGrid);

    for (let row = 0; row < rowCount; row++) {
        table[row] = new Array(colCount);
        const newRow = document.createElement('ul');
        newRow.className = 'row';
        tiles[row] = newRow;
        for (let col = 0; col < colCount; col++){
            const tileColor = colorClass(numColors);
            table[row][col] = { color: tileColor, flooded: false };
            tiles[row][col] = buildTile(tileColor, row, col, newRow);
        }
        displayGrid.appendChild(newRow);
    }
    table[0][0].flooded = true;
    tiles[0][0].flooded = true;
    Object(__WEBPACK_IMPORTED_MODULE_0__flood_logic__["a" /* handleFlood */])(null, tiles[0][0].className);
    
    return table;
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
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return moves; });
/* harmony export (immutable) */ __webpack_exports__["a"] = handleFlood;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup__ = __webpack_require__(3);




// Call flood when creating grid to attach initial matches
let moves = -1; 
let finished = false;

function handleFlood(oldColor, newColor) {
    if (finished || moves > __WEBPACK_IMPORTED_MODULE_2__setup__["a" /* maxMoves */]) return;
    // Do nothing if clicked tile is original
    if (oldColor === newColor) return;
    moves++;
    for (let row = 0; row < __WEBPACK_IMPORTED_MODULE_1__main__["numRows"]; row++) {
        for (let col = 0; col < __WEBPACK_IMPORTED_MODULE_1__main__["numCols"]; col++) {
            if (__WEBPACK_IMPORTED_MODULE_0__grid__["b" /* tiles */][row][col].flooded) {
                floodTile(row, col, newColor);
                floodNeighbors(row, col, newColor);
            }
        }
    }
    gameOver();
    updateInfo();
}

function floodTile(row, col, color) {
    __WEBPACK_IMPORTED_MODULE_0__grid__["b" /* tiles */][row][col].className = '';
    __WEBPACK_IMPORTED_MODULE_0__grid__["b" /* tiles */][row][col].className = color;
    __WEBPACK_IMPORTED_MODULE_0__grid__["b" /* tiles */][row][col].flooded = true;
}

function floodNeighbors(row, col, color) {
    if (row < __WEBPACK_IMPORTED_MODULE_1__main__["numRows"] - 1) canBeFlooded(row + 1, col, color);
    if (row > 0) canBeFlooded(row - 1, col, color);
    if (col < __WEBPACK_IMPORTED_MODULE_1__main__["numCols"] - 1) canBeFlooded(row, col + 1, color);
    if (col > 0) canBeFlooded(row, col - 1, color);
}

function canBeFlooded(row, col, color) {
    if (__WEBPACK_IMPORTED_MODULE_0__grid__["b" /* tiles */][row][col].flooded) return; // Skip if it is already flooded
    if (__WEBPACK_IMPORTED_MODULE_0__grid__["b" /* tiles */][row][col].className === color){
        floodTile(row, col, color);    // Toggle Flood
        setTimeout(floodNeighbors(row, col, color), 15);   // Check the neighbors
    }
}

function floodedBoard(){
    for (let row = 0; row < __WEBPACK_IMPORTED_MODULE_1__main__["numRows"]; row++){
        for (let col = 0; col < __WEBPACK_IMPORTED_MODULE_1__main__["numCols"]; col++){
            if (!__WEBPACK_IMPORTED_MODULE_0__grid__["b" /* tiles */][row][col].flooded) return;
        }
    }
    finished = true;
}

function gameOver() {
    floodedBoard();
    if (floodedBoard()){
        alert('You won!');
    } else if (moves >= __WEBPACK_IMPORTED_MODULE_2__setup__["a" /* maxMoves */]) {
        alert('You Lost!');
    }
}

function updateInfo() {
    const infoEl = document.getElementById('info');
    const movesEl = document.getElementById('moves_counter');
    movesEl.innerHTML = moves + '/' + __WEBPACK_IMPORTED_MODULE_2__setup__["a" /* maxMoves */];
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return maxMoves; });
/* harmony export (immutable) */ __webpack_exports__["b"] = setupDOM;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flood_logic__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__grid__ = __webpack_require__(1);




// DOM Setup

let maxMoves = 25;

function setupDOM() {
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
    movesEl.innerHTML = __WEBPACK_IMPORTED_MODULE_0__flood_logic__["b" /* moves */] + '/' + maxMoves;
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
    Object(__WEBPACK_IMPORTED_MODULE_2__grid__["a" /* createGrid */])(__WEBPACK_IMPORTED_MODULE_1__main__["numRows"], __WEBPACK_IMPORTED_MODULE_1__main__["numCols"], __WEBPACK_IMPORTED_MODULE_1__main__["numColors"]);
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
    let gameConditions = (__WEBPACK_IMPORTED_MODULE_1__main__["numRows"] + __WEBPACK_IMPORTED_MODULE_1__main__["numCols"]) * __WEBPACK_IMPORTED_MODULE_1__main__["numColors"];
    maxMoves = Math.floor(25 * (gameConditions / defaultConditions));
    return { numRows: gridSize, numCols: gridSize, numColors: colorCount}
}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map