console.log("-----------------------move zero to right");

let func = moveZerosToRight;

const input0 = [6, 5, 4, 3, 2, 1];
const result0 = [6, 5, 4, 3, 2, 1];

const input1 = [0, 5, 0, 3, -1];
const result1 = [5, 3, -1, 0, 0];

const input2 = [3, 0, 3];
const result2 = [3, 3, 0];

const input2a = [3, 0, 0, 3];
const result2a = [3, 3, 0, 0];

const input2b = [3, 0, 3, 0];
const result2b = [3, 3, 0, 0];

const input2c = [3, 0, 3, 0, 3];
const result2c = [3, 3, 3, 0, 0];

timeIt(input0, Object.keys({input0})[0], result0, func);
timeIt(input1, Object.keys({input1})[0], result1, func);
timeIt(input2, Object.keys({input2})[0], result2, func);
timeIt(input2a, Object.keys({input2a})[0], result2a, func);
timeIt(input2b, Object.keys({input2b})[0], result2b, func);
timeIt(input2c, Object.keys({input2c})[0], result2c, func);


func = moveZerosToRightUsingSwap;

timeIt(input0, Object.keys({input0})[0], result0, func);
timeIt(input1, Object.keys({input1})[0], result1, func);
timeIt(input2, Object.keys({input2})[0], result2, func);
timeIt(input2a, Object.keys({input2a})[0], result2a, func);
timeIt(input2b, Object.keys({input2b})[0], result2b, func);
timeIt(input2c, Object.keys({input2c})[0], result2c, func);
