console.log("-----------------------longestDistinctSubString");

let func = longestDistinctSubString;

const input1 = "aabcbcbc";
const result1 = 3;
timeIt(input1, Object.keys({input1})[0], result1, func);


const input2 = "aaaaaaaaa";
const result2 = 1;
timeIt(input2, Object.keys({input2})[0], result2, func);

const input3 = "abbbcedd";
const result3 = 4;
timeIt(input3, Object.keys({input3})[0], result3, func);

