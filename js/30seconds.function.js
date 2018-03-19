

/*
 * https://30secondsofcode.org/
 */

//https://30secondsofcode.org/#chainasync
const chainAsync = fns => {
    let curr = 0;
    const next = () => fns[curr++](next);
    next();
};

//https://30secondsofcode.org/#compose
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));

//https://30secondsofcode.org/#composeright
const composeRight = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));

//https://30secondsofcode.org/#curry
const curry = (fn, arity = fn.length, ...args) =>
    arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);

//https://30secondsofcode.org/#debounce
const debounce = (fn, ms = 0) => {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
};

//https://30secondsofcode.org/#defer
const defer = (fn, ...args) => setTimeout(fn, 1, ...args);

//https://30secondsofcode.org/#delay
const delay = (fn, wait, ...args) => setTimeout(fn, wait, ...args);

//https://30secondsofcode.org/#functionname
const functionName = fn => (console.debug(fn.name), fn);

//https://30secondsofcode.org/#memoize
const memoize = fn => {
    const cache = new Map();
    const cached = function(val) {
        return cache.has(val) ? cache.get(val) : cache.set(val, fn.call(this, val)) && cache.get(val);
    };
    cached.cache = cache;
    return cached;
};

//https://30secondsofcode.org/#negate
const negate = func => (...args) => !func(...args);

//https://30secondsofcode.org/#once
const once = fn => {
    let called = false;
    return function(...args) {
        if (called) return;
        called = true;
        return fn.apply(this, args);
    };
};

//https://30secondsofcode.org/#partial
const partial = (fn, ...partials) => (...args) => fn(...partials, ...args);

//https://30secondsofcode.org/#partialright
const partialRight = (fn, ...partials) => (...args) => fn(...args, ...partials);

//https://30secondsofcode.org/#runpromisesinseries
const runPromisesInSeries = ps => ps.reduce((p, next) => p.then(next), Promise.resolve());

//https://30secondsofcode.org/#sleep
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

//https://30secondsofcode.org/#throttle
const throttle = (fn, wait) => {
    let inThrottle, lastFn, lastTime;
    return function() {
        const context = this,
            args = arguments;
        if (!inThrottle) {
            fn.apply(context, args);
            lastTime = Date.now();
            inThrottle = true;
        } else {
            clearTimeout(lastFn);
            lastFn = setTimeout(function() {
                if (Date.now() - lastTime >= wait) {
                    fn.apply(context, args);
                    lastTime = Date.now();
                }
            }, wait - (Date.now() - lastTime));
        }
    };
};

//https://30secondsofcode.org/#times
const times = (n, fn, context = undefined) => {
    let i = 0;
    while (fn.call(context, i) !== false && ++i < n) {}
};

//https://30secondsofcode.org/#unfold
const unfold = (fn, seed) => {
    let result = [],
        val = [null, seed];
    while ((val = fn(val[1]))) result.push(val[0]);
    return result;
};






























