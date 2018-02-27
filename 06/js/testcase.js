console.log("-----------------------intersection");

let func = intersection;

const input1 = [
    [2,4],
    [1,5],
    [7,9],
];
const result1 = [
    [1,5],
    [7,9],
];
timeIt(input1, Object.keys({input1})[0], result1, func);


const input2 = [
    [3,6],
    [1,3],
    [2,4],
];
const result2 = [
    [1,6],
];
timeIt(input2, Object.keys({input2})[0], result2, func);

