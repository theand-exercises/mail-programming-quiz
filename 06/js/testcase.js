console.log("-----------------------intersection");

let func;

func = isLeftWider;
const input0a = [2,4];
const result0a = true;
timeIt(input0a, Object.keys({input0a})[0], result0a, func, null, [1,5]);


func = isRightWider;
const input0b = [2,4];
const result0b = true;
timeIt(input0b, Object.keys({input0b})[0], result0b, func, null, [1,5]);


func = isWider;
const input0c = [2,4];
const result0c = true;
timeIt(input0c, Object.keys({input0c})[0], result0c, func, null, [1,5]);



func = mergeRangeArray;

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

