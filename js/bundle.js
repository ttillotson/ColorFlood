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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tiles; });
/* harmony export (immutable) */ __webpack_exports__["a"] = createGrid;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flood_logic__ = __webpack_require__(3);


const table = new Array(14);
/* unused harmony export table */

let tiles;

function createGrid (rowCount, colCount, numColors) {
    tiles = new Array(rowCount);
    const gameContainer = document.getElementById('game_container');
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
    Object(__WEBPACK_IMPORTED_MODULE_1__grid__["a" /* createGrid */])(numRows, numCols, numColors);
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
    Object(__WEBPACK_IMPORTED_MODULE_1__grid__["a" /* createGrid */])(14, 14, numColors);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_debounce__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash_debounce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash_debounce__);





// Call flood when creating grid to attach initial matches
let moves = -1; 
let finished = false;

function handleFlood(oldColor, newColor) {
    if (finished || moves >= __WEBPACK_IMPORTED_MODULE_2__setup_js__["a" /* maxMoves */]) return;
    // Do nothing if clicked tile is original
    if (oldColor === newColor) return;
    moves++;
    // for (let row = 0; row < numRows; row++) {
    //     for (let col = 0; col < numCols; col++) {
    //         if (tiles[row][col].flooded) {
    //             floodTile(row, col, newColor);
    //             floodNeighbors(row, col, newColor);
    //         }
    //     }
    // }
    floodTile(0, 0, newColor, moves);
    // gameOver();
    updateInfo();
}

function floodTile(row, col, color, moveId) {
    __WEBPACK_IMPORTED_MODULE_0__grid__["b" /* tiles */][row][col].className = '';
    __WEBPACK_IMPORTED_MODULE_0__grid__["b" /* tiles */][row][col].className = color;
    __WEBPACK_IMPORTED_MODULE_0__grid__["b" /* tiles */][row][col].lastChanged = moveId;
    __WEBPACK_IMPORTED_MODULE_0__grid__["b" /* tiles */][row][col].flooded = true;
    // debugger;
    setTimeout(floodNeighbors.bind(null, ...arguments), 30);
    __WEBPACK_IMPORTED_MODULE_3_lodash_debounce___default()(gameOver, 70);
    gameOver();
}

function floodNeighbors(row, col, color, moveId) {
    if (row < __WEBPACK_IMPORTED_MODULE_1__main__["numRows"] - 1) canBeFlooded(row + 1, col, color, moveId);
    if (row > 0) canBeFlooded(row - 1, col, color, moveId);
    if (col < __WEBPACK_IMPORTED_MODULE_1__main__["numCols"] - 1) canBeFlooded(row, col + 1, color, moveId);
    if (col > 0) canBeFlooded(row, col - 1, color, moveId);
}

function canBeFlooded(row, col, color, moveId) {
    // if (tiles[row][col].flooded) return; // Skip if it is already flooded
    if ((__WEBPACK_IMPORTED_MODULE_0__grid__["b" /* tiles */][row][col].className === color || __WEBPACK_IMPORTED_MODULE_0__grid__["b" /* tiles */][row][col].flooded) && 
        (__WEBPACK_IMPORTED_MODULE_0__grid__["b" /* tiles */][row][col].lastChanged === undefined || __WEBPACK_IMPORTED_MODULE_0__grid__["b" /* tiles */][row][col].lastChanged !== moveId)){
        floodTile(row, col, color, moveId);    // Toggle Flood
        // setTimeout(floodNeighbors(row, col, color), 2000);   // Check the neighbors
    }
}

function floodedBoard(){
    for (let row = 0; row < __WEBPACK_IMPORTED_MODULE_1__main__["numRows"]; row++){
        for (let col = 0; col < __WEBPACK_IMPORTED_MODULE_1__main__["numCols"]; col++){
            console.log(__WEBPACK_IMPORTED_MODULE_0__grid__["b" /* tiles */][row][col].flooded);
            console.log(`${row} ${col}`);
            if (!__WEBPACK_IMPORTED_MODULE_0__grid__["b" /* tiles */][row][col].flooded) return;
        }
    }
    // finished = true;
    return true;
}

function gameOver() {
    // floodedBoard();
    // console.log('called');
    if (floodedBoard()){
        victory();

    } else if (moves >= __WEBPACK_IMPORTED_MODULE_2__setup_js__["a" /* maxMoves */]) {
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
    // gameOver();
}

function resetMoves() {
    moves = -1;
    finished = false;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map