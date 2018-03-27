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

const input0d = [1,4];
const result0d = true;
timeIt(input0d, Object.keys({input0d})[0], result0d, func, null, [2,5]);

const input0e = [2,5];
const result0e = true;
timeIt(input0e, Object.keys({input0e})[0], result0e, func, null, [1,4]);

func = isNested;
const input0f = [2,4];
const result0f = false;
timeIt(input0f, Object.keys({input0f})[0], result0f, func, null, [1,5]);

const input0g = [1,5];
const result0g = true;
timeIt(input0g, Object.keys({input0g})[0], result0g, func, null, [2,4]);



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


const input3 = [
    [10,11],
    [1,9],
    [1,1]
];
const result3 = [
    [1,9],
    [10,11]
];
timeIt(input3, Object.keys({input3})[0], result3, func);


const input4 = [
    [2,8]
];
const result4 = [
    [2,8]
];
timeIt(input4, Object.keys({input4})[0], result4, func);


const input5a = [
    [4,5],
    [1,3],
];
const result5a = [
    [1,3],
    [4,5]
];
timeIt(input5a, Object.keys({input5a})[0], result5a, func);


const input5 = [
    [4,5],
    [1,3],
    [2,4],
    [2,4],
    [2,4]
];
const result5 = [
    [1,5]
];
timeIt(input5, Object.keys({input5})[0], result5, func);

