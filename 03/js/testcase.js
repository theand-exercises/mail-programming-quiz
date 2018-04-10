console.log("-----------------------parenPermutation.");

const func = parenPermutation;

const input1 = 1;
const result1 = ["()"];
timeIt(input1, Object.keys({input1})[0], result1, func);


const input2 = 2;
const result2 = ["(())", "()()"];
timeIt(input2, Object.keys({input2})[0], result2, func);


const input3 = 3;
const result3 = ["((()))", "(())", "()(())", "(())()", "()()()"];
timeIt(input3, Object.keys({input3})[0], result3, func);

