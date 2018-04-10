console.log("-----------------------multiplyOfAllOtherRest");

let func = multiplyOfAllOtherRest;

const input0 = [1,2,3,4,5];
const result0 = [120,60,40,30,24];
timeIt(input0, Object.keys({input0})[0], result0, func);

const input1 = [3,2,1];
const result1 = [2,3,6];
timeIt(input1, Object.keys({input1})[0], result1, func);
