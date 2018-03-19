

/*
 * https://30secondsofcode.org/
 */

//https://30secondsofcode.org/#pipefunctions
const pipeFunctions = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));

//https://30secondsofcode.org/#spreadover
const spreadOver = fn => argsArr => fn(...argsArr);

//https://30secondsofcode.org/#unary
const unary = fn => val => fn(val);


