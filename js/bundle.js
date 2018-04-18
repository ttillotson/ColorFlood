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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid__ = __webpack_require__(1);


const numRows = 14;
/* harmony export (immutable) */ __webpack_exports__["numRows"] = numRows;

const numCols = 14;
/* harmony export (immutable) */ __webpack_exports__["numCols"] = numCols;

document.addEventListener('DOMContentLoaded', () => {

    Object(__WEBPACK_IMPORTED_MODULE_0__grid__["a" /* createGrid */])(numRows, numCols);
});



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createGrid;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flood_logic__ = __webpack_require__(2);


// Function to build grid - 14 <ul> by 14 <li>
// - Assigns random tile color
// 
// 
const table = new Array(14);
/* unused harmony export table */

const tiles = new Array(14);
/* harmony export (immutable) */ __webpack_exports__["b"] = tiles;


function createGrid (rowCount, colCount) {
    for (let row = 0; row < rowCount; row++) {
        const displayTable = document.getElementById('flood_grid');
        table[row] = new Array(colCount);
        const newRow = document.createElement('ul');
        newRow.className = 'row';
        tiles[row] = newRow;
        for (let col = 0; col < colCount; col++){
            const tileColor = colorClass();
            table[row][col] = { color: tileColor, flooded: false };
            tiles[row][col] = buildTile(tileColor, row, col, newRow);
        }
        displayTable.appendChild(newRow);
    }

    table[0][0].flooded = true;
    tiles[0][0].flooded = true;
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
    tile.onclick = Object(__WEBPACK_IMPORTED_MODULE_0__flood_logic__["a" /* handleFlood */])(originTile.className, tile.className);
    parentEl.appendChild(tile);
    return tile;
}

const tileColorClasses = [
    "purple",
    "blue",
    "green",
    "red",
    "yellow",
    "orange"
];

const colorClass = function () {
    return tileColorClasses[Math.floor(Math.random() * Math.floor(6))];
};

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export moves */
/* harmony export (immutable) */ __webpack_exports__["a"] = handleFlood;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__grid__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main__ = __webpack_require__(0);



let moves = -1;
let finished = false;

function handleFlood(oldColor, newColor) {

}

function floodTile(row, col, color) {
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
        __WEBPACK_IMPORTED_MODULE_0__grid__["b" /* tiles */][row][col].flooded = true;    // Toggle Flood
        floodNeighbors(row, col, color);   // Check the neighbors
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
    if (floodedBoard) {

    }
}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map