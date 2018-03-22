//testdata gen
const randomNumber = () => Math.floor(Math.random() * 201) - 100;

const randomNumberArray = n => Array.from({length: n}, () => randomNumber());

//0. common
const sumOfArray = array => array.reduce((a, b) => (counter++, a + b), 0);

const getLargestValue = array => Math.max(...array);


//1. naive way
let counter = 0;
const getConsecutiveSumNaiveWay = array => {
    counter = 0;
    return array.map((e, i, a) => (counter++, sumOfArray(a.slice(i))));
};


//2. memoize
const _memoize = function (runner, keyMaker) {
    return function memoize(data) {
        const key = keyMaker(data);
        memoize.cache = memoize.cache || {};
        if (memoize.cache.hasOwnProperty(key)) {
            console.log("cache hit");
            return memoize.cache[key];
        } else {
            console.log("cache miss");
            return memoize.cache[key] = runner(data);
        }
    }
};

const arrayHasher = arr => JSON.stringify(arr);

const getConsecutiveSumMemoize = array => {

    counter=0;
    return array.map( (e,i,a) => (counter++,  _memoize(sumOfArray, arrayHasher)(a.slice(i))));
};

//3. benchmark
const timeIt = (arr, name, expected, func) => {
    console.group(`${name} : ${arr.length}`);

    // console.time(name);
    // getLargestValue(func(arr));
    // console.timeEnd(name);

    // console.log(getLargestValue(func(arr)));
    console.assert(getLargestValue(func(arr)) === expected, name);
    console.log(`loop counter : ${counter}`);
    counter = 0;

    console.groupEnd();
};


