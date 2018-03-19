console.log("-----------------------find second max integer");


let func = reverseEachWord;

const input0 = "abc 123 apple";
const result0 = "cba 321 elppa";

const input1 = "abc 123 def";
const result1 = "cba 321 fed";


timeIt(input0, Object.keys({input0})[0], result0, func, equals);
timeIt(input1, Object.keys({input1})[0], result1, func, equals);

