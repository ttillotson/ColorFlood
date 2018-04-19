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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxMoves", function() { return maxMoves; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid__ = __webpack_require__(1);


let numRows = 14;
let numCols = 14;
let numColors = 6;
let maxMoves = 25;

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
    Object(__WEBPACK_IMPORTED_MODULE_0__grid__["a" /* createGrid */])(numRows, numCols, numColors);
});



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createGrid;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flood_logic__ = __webpack_require__(2);


const table = new Array(14);
/* unused harmony export table */

const tiles = new Array(14);
/* harmony export (immutable) */ __webpack_exports__["b"] = tiles;


function createContainers() {
    const displayTable = document.createElement('section');
    displayTable.id = 'flood_grid';
    const infoAside = document.createElement('aside');
    infoAside.id = 'info';
    const gameContainer = document.getElementById('game_container');
    gameContainer.appendChild(infoAside);
    gameContainer.appendChild(displayTable);
    return displayTable;
}

function createGrid (rowCount, colCount, numColors) {
    const displayTable = createContainers();
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
        displayTable.appendChild(newRow);
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
    tile.className = `${tileColor}`;
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
/* unused harmony export moves */
/* unused harmony export displayInfo */
/* harmony export (immutable) */ __webpack_exports__["a"] = handleFlood;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main__ = __webpack_require__(0);



let moves = -1;    // Call flood when creating grid to attach initial matches
let finished = false;


function displayInfo() {
    const infoEl = document.getElementById('info');
    const movesEl = document.createElement('h3');
    const instructionsEl = document.createElement('h4');

    movesEl.innerHTML = moves + '/' + __WEBPACK_IMPORTED_MODULE_1__main__["maxMoves"];
    instructionsEl.innerHTML = "Click a tile and try to flood the map!";

    infoEl.appendChild(movesEl);
    if (moves < 1) infoEl.appendChild(instructionsEl);
    
}

function handleFlood(oldColor, newColor) {
    if (finished) return;
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
    displayInfo();
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
    if (finished){
        if (moves <= __WEBPACK_IMPORTED_MODULE_1__main__["maxMoves"]) {
            alert('You won!');
        } else {
            alert('You Lost!');
        }
    }
}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map