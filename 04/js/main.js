//0. common


const numOfDigits = e => {
    let n=0;
    console.log("run", e);
    while(e > 0){
        e = Math.floor(e/10);
        n++;
    }
    return n;
};

const _memoize = function (runner, keyMaker) {
    return function memoize(data) {
        const key = keyMaker(data);
        console.log("data", typeof data);
        console.log("key", typeof key);
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

const numHasher = num => JSON.stringify(num);

const numOfDigitsSumMemoize = num => _memoize(numOfDigits, numHasher)(num);


const isIntegerPalindrome = e => {
    return true;
};

