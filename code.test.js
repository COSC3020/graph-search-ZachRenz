// I looked at some other student's testing files to build this testing file

const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

const graph1 = [
    [],
    [5],
    [5],
    [5],
    [],
    [1,2,3,7],
    [],
    [5]
];
assert(JSON.stringify(depthFirstSearch(graph1, 0, 5)) == JSON.stringify([]));
assert(JSON.stringify(depthFirstSearch(graph1, 1, 5)) == JSON.stringify([1,5]));
assert(JSON.stringify(depthFirstSearch(graph1, 5, 1)) == JSON.stringify([5,1]));
assert(JSON.stringify(depthFirstSearch(graph1, 7, 5)) == JSON.stringify([7,5]));
assert(JSON.stringify(depthFirstSearch(graph1, 5, 3)) == JSON.stringify([5,3]));


const graph2 = [
    [1], 
    [2], 
    [3], 
    [4], 
    [5]
];
assert(JSON.stringify(depthFirstSearch(graph2, 0, 1)) == JSON.stringify([0, 1]));
assert(JSON.stringify(depthFirstSearch(graph2, 0, 2)) == JSON.stringify([0, 1, 2]));
assert(JSON.stringify(depthFirstSearch(graph2, 0, 3)) == JSON.stringify([0, 1, 2, 3]));
assert(JSON.stringify(depthFirstSearch(graph2, 0, 4)) == JSON.stringify([0, 1, 2, 3, 4]));
assert(JSON.stringify(depthFirstSearch(graph2, 0, 5)) == JSON.stringify([0, 1, 2, 3, 4, 5]));


const graph3 = [
    [2,3,6],
    [3],
    [0],
    [0,1,7],
    [],
    [],
    [0],
    [8,3],
    [7]
];
assert(JSON.stringify(depthFirstSearch(graph3, 0, 2)) == JSON.stringify([0, 2]));
assert(JSON.stringify(depthFirstSearch(graph3, 0, 8)) == JSON.stringify([0,3,7,8]));
assert(JSON.stringify(depthFirstSearch(graph3, 8, 0)) == JSON.stringify([8,7,3,0]));
assert(JSON.stringify(depthFirstSearch(graph3, 5, 0)) == JSON.stringify([]));
assert(JSON.stringify(depthFirstSearch(graph3, 1,6)) == JSON.stringify([1,3,0,6]));
