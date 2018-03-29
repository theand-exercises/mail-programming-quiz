console.log("-----------------------XXX");

let func = findIndexOfTargetSum;

const input1 = {array: [2, 5, 6, 1, 10], target: 8};
const result1 = [0, 2];
timeIt(input1, Object.keys({input1})[0], result1, func);

const input2 = {array: [10, 2, 5, 6, 1 ], target: 8};
const result2 = [1, 3];
timeIt(input2, Object.keys({input2})[0], result2, func);


const input3 = {array: [10, 1, 2, 5, 6], target: 8};
const result3 = [2, 4];
timeIt(input3, Object.keys({input3})[0], result3, func);


const input4 = {array: [10, 6, 1, 2, 5], target: 8};
const result4 = [1, 3];
timeIt(input4, Object.keys({input4})[0], result4, func);

