console.log("-----------------------isDecodable");

let func = isDecodable;

const input0 = ["EGG", "FOO"];
const result0 = true;
timeIt(input0, Object.keys({input0})[0], result0, func);

const input1 = ["ABBCD", "APPLE"];
const result1 = true;
timeIt(input1, Object.keys({input1})[0], result1, func);


const input2 = ["AAB", "FOO"];
const result2 = false;
timeIt(input2, Object.keys({input2})[0], result2, func);

