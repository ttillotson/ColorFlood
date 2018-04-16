// Function to build grid - 14 <ul> by 14 <li>
// - Assigns random tile color
// 
// 
// 
// 
// 
// 
// 

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