// Function to build grid - 14 <ul> by 14 <li>
// - Assigns random tile color
// 
// 
// 
// 
// 
// 
// 
const numRows = 14;
const numCol = 14;

const createTable = function (rowCount, colCount) {
    const table = new Array(rowCount);
    for (let row = 0; row < rowCount; row++) {
        table[row] = new Array(colCount);
    }
    return table;
};



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