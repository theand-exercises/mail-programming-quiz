console.log("-----------------------longestDistinctSubString");

let func = longestDistinctSubString;

const input0 = "a";
const result0 = 1;
timeIt(input0, Object.keys({input0})[0], result0, func);

const input1 = "aabcbcbc";
const result1 = 3;
timeIt(input1, Object.keys({input1})[0], result1, func);


const input2 = "aaaaaaaaa";
const result2 = 1;
timeIt(input2, Object.keys({input2})[0], result2, func);

const input3 = "abbbcedd";
const result3 = 4;
timeIt(input3, Object.keys({input3})[0], result3, func);

const input4 = "aaaabbbfffadakdef";
const result4 = 5;
timeIt(input4, Object.keys({input4})[0], result4, func);

