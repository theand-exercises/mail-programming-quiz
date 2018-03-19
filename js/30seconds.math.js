

/*
 * https://30secondsofcode.org/
 */

//https://30secondsofcode.org/#average
const average = (...nums) => [...nums].reduce((acc, val) => acc + val, 0) / nums.length;

//https://30secondsofcode.org/#averageby
const averageBy = (arr, fn) =>
    arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0) /
    arr.length;

//https://30secondsofcode.org/#clampnumber
const clampNumber = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));

//https://30secondsofcode.org/#digitize
const digitize = n => [...`${n}`].map(i => parseInt(i));

//https://30secondsofcode.org/#factorial
const factorial = n =>
    n < 0
        ? (() => {
            throw new TypeError('Negative numbers are not allowed!');
        })()
        : n <= 1 ? 1 : n * factorial(n - 1);

//https://30secondsofcode.org/#fibonacci
const fibonacci = n =>
    Array.from({ length: n }).reduce(
        (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
        []
    );

//https://30secondsofcode.org/#inrange
const inRange = (n, start, end = null) => {
    if (end && start > end) end = [start, (start = end)][0];
    return end == null ? n >= 0 && n < start : n >= start && n < end;
};


//https://30secondsofcode.org/#maxby
const maxBy = (arr, fn) => Math.max(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));

//https://30secondsofcode.org/#median
const median = arr => {
    const mid = Math.floor(arr.length / 2),
        nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
};

//https://30secondsofcode.org/#minby
const minBy = (arr, fn) => Math.min(...arr.map(typeof fn === 'function' ? fn : val => val[fn]));

//https://30secondsofcode.org/#percentile
const percentile = (arr, val) =>
    100 * arr.reduce((acc, v) => acc + (v < val ? 1 : 0) + (v === val ? 0.5 : 0), 0) / arr.length;

//https://30secondsofcode.org/#powerset
const powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);

//https://30secondsofcode.org/#randomintarrayinrange
const randomIntArrayInRange = (min, max, n = 1) =>
    Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);

//https://30secondsofcode.org/#randomintegerinrange
const randomIntegerInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

//https://30secondsofcode.org/#randomnumberinrange
const randomNumberInRange = (min, max) => Math.random() * (max - min) + min;

//https://30secondsofcode.org/#round
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

//https://30secondsofcode.org/#sum
const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);

//https://30secondsofcode.org/#sumby
const sumBy = (arr, fn) =>
    arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0);

//https://30secondsofcode.org/#tosafeinteger
const toSafeInteger = num =>
    Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));


























