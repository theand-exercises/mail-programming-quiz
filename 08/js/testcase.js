console.log("-----------------------find second max integer");


let func = findSecondMax;

const input0 = [6, 5, 4, 3, 2, 1];
const result0 = 5;

const input1 = [0, 5, 0, 3, 1];
const result1 = 3;

const input2 = [10, 5, 4, 3, 1];
const result2 = 5;

const input3 = [3, 3, 3];
const result3 = "NORESULT";

const input4 = [-10, -5, -4, -3, -1];
const result4 = -3;


timeIt(input0, Object.keys({input0})[0], result0, func, equals);
timeIt(input1, Object.keys({input1})[0], result1, func, equals);
timeIt(input2, Object.keys({input2})[0], result2, func, equals);
timeIt(input3, Object.keys({input3})[0], result3, func, equals);
timeIt(input4, Object.keys({input4})[0], result4, func, equals);


