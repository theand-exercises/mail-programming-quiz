console.log("-----------------------isIntegerPalindrome.");

let funcNum = isPalindromeInteger;

const input1 = 12345;
const result1 = false;
timeIt(input1, Object.keys({input1})[0], result1, funcNum);


const input2 = -101;
const result2 = false;
timeIt(input2, Object.keys({input2})[0], result2, funcNum);


const input3 = 11111;
const result3 = true;
timeIt(input3, Object.keys({input3})[0], result3, funcNum);


const input4 = 12321;
const result4 = true;
timeIt(input4, Object.keys({input4})[0], result4, funcNum);


