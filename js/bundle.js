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


document.addEventListener('DOMContentLoaded', () => {
    const numRows = 14;
    const numCols = 14;

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
const tiles = new Array(14);

function createGrid (rowCount, colCount) {
    for (let row = 0; row < rowCount; row++) {
        const displayTable = document.getElementById('flood_grid');
        table[row] = new Array(colCount);
        const newRow = document.createElement('ul');
        tiles[row] = newRow;
        for (let col = 0; col < colCount; col++){
            const tileColor = colorClass();
            table[row][col] = { color: tileColor, flooded: false };
            tiles[row][col] = buildTile(tileColor, row, col, newRow);
        }
        displayTable.appendChild(newRow);
    }
    
    return table;
}

function buildTile(tileColor, row, col, parentEl) {
    let tile = document.createElement('li');
    tile.dataset.row = row;
    tile.dataset.col = col;
    tile.className = `tile ${tileColor}`;
    tile.onclick = __WEBPACK_IMPORTED_MODULE_0__flood_logic__["a" /* handleFlood */];
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
/* harmony export (immutable) */ __webpack_exports__["a"] = handleFlood;
function handleFlood() {
    
}

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map