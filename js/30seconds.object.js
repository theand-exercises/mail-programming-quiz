

/*
 * https://30secondsofcode.org/
 */


//https://30secondsofcode.org/#deepclone
const deepClone = obj => {
    let clone = Object.assign({}, obj);
    Object.keys(clone).forEach(
        key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
    );
    return clone;
};

//https://30secondsofcode.org/#defaults
const defaults = (obj, ...defs) => Object.assign({}, obj, ...defs.reverse(), obj);

//https://30secondsofcode.org/#equals
const equals = (a, b) => {
    if (a === b) return true;
    if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
    if (!a || !b || (typeof a != 'object' && typeof b !== 'object')) return a === b;
    if (a === null || a === undefined || b === null || b === undefined) return false;
    if (a.prototype !== b.prototype) return false;
    let keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length) return false;
    return keys.every(k => equals(a[k], b[k]));
};

//https://30secondsofcode.org/#findkey
const findKey = (obj, fn) => Object.keys(obj).find(key => fn(obj[key], key, obj));

//https://30secondsofcode.org/#findlastkey
const findLastKey = (obj, fn) =>
    Object.keys(obj)
        .reverse()
        .find(key => fn(obj[key], key, obj));

//https://30secondsofcode.org/#flattenobject
const flattenObject = (obj, prefix = '') =>
    Object.keys(obj).reduce((acc, k) => {
        const pre = prefix.length ? prefix + '.' : '';
        if (typeof obj[k] === 'object') Object.assign(acc, flattenObject(obj[k], pre + k));
        else acc[pre + k] = obj[k];
        return acc;
    }, {});

//https://30secondsofcode.org/#forown
const forOwn = (obj, fn) => Object.keys(obj).forEach(key => fn(obj[key], key, obj));

//https://30secondsofcode.org/#forownright
const forOwnRight = (obj, fn) =>
    Object.keys(obj)
        .reverse()
        .forEach(key => fn(obj[key], key, obj));

//https://30secondsofcode.org/#functions
const functions = (obj, inherited = false) =>
    (inherited
            ? [...Object.keys(obj), ...Object.keys(Object.getPrototypeOf(obj))]
            : Object.keys(obj)
    ).filter(key => typeof obj[key] === 'function');

//https://30secondsofcode.org/#get
const get = (from, ...selectors) =>
    [...selectors].map(s =>
        s
            .replace(/\[([^\[\]]*)\]/g, '.$1.')
            .split('.')
            .filter(t => t !== '')
            .reduce((prev, cur) => prev && prev[cur], from)
    );

//https://30secondsofcode.org/#invertkeyvalues
const invertKeyValues = (obj, fn) =>
    Object.keys(obj).reduce((acc, key) => {
        const val = fn ? fn(obj[key]) : obj[key];
        acc[val] = acc[val] || [];
        acc[val].push(key);
        return acc;
    }, {});

//https://30secondsofcode.org/#lowercasekeys
const lowercaseKeys = obj =>
    Object.keys(obj).reduce((acc, key) => {
        acc[key.toLowerCase()] = obj[key];
        return acc;
    }, {});

//https://30secondsofcode.org/#mapkeys
const mapKeys = (obj, fn) =>
    Object.keys(obj).reduce((acc, k) => {
        acc[fn(obj[k], k, obj)] = obj[k];
        return acc;
    }, {});

//https://30secondsofcode.org/#mapvalues
const mapValues = (obj, fn) =>
    Object.keys(obj).reduce((acc, k) => {
        acc[k] = fn(obj[k], k, obj);
        return acc;
    }, {});

//https://30secondsofcode.org/#matches
const matches = (obj, source) =>
    Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);

//https://30secondsofcode.org/#matcheswith
const matchesWith = (obj, source, fn) =>
    Object.keys(source).every(
        key =>
            obj.hasOwnProperty(key) && fn
                ? fn(obj[key], source[key], key, obj, source)
                : obj[key] == source[key]
    );

//https://30secondsofcode.org/#merge
const merge = (...objs) =>
    [...objs].reduce(
        (acc, obj) =>
            Object.keys(obj).reduce((a, k) => {
                acc[k] = acc.hasOwnProperty(k) ? [].concat(acc[k]).concat(obj[k]) : obj[k];
                return acc;
            }, {}),
        {}
    );

//const objectFromPairs = arr => arr.reduce((a, v) => ((a[v[0]] = v[1]), a), {});
const objectFromPairs = arr => arr.reduce((a, v) => ((a[v[0]] = v[1]), a), {});

//https://30secondsofcode.org/#objectfrompairs
const objectToPairs = obj => Object.keys(obj).map(k => [k, obj[k]]);

//https://30secondsofcode.org/#omit
const omit = (obj, arr) =>
    Object.keys(obj)
        .filter(k => !arr.includes(k))
        .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});

//https://30secondsofcode.org/#omitby
const omitBy = (obj, fn) =>
    Object.keys(obj)
        .filter(k => !fn(obj[k], k))
        .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});

//https://30secondsofcode.org/#pick
const pick = (obj, arr) =>
    arr.reduce((acc, curr) => (curr in obj && (acc[curr] = obj[curr]), acc), {});

//https://30secondsofcode.org/#pickby
const pickBy = (obj, fn) =>
    Object.keys(obj)
        .filter(k => fn(obj[k], k))
        .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});

//https://30secondsofcode.org/#shallowclone
const shallowClone = obj => Object.assign({}, obj);

//https://30secondsofcode.org/#size
const size = val =>
    Array.isArray(val)
        ? val.length
        : val && typeof val === 'object'
        ? val.size || val.length || Object.keys(val).length
        : typeof val === 'string' ? new Blob([val]).size : 0;

//https://30secondsofcode.org/#unflattenobject
const unflattenObject = obj =>
    Object.keys(obj).reduce((acc, k) => {
        if (k.indexOf('.') !== -1) {
            const keys = k.split('.');
            Object.assign(
                acc,
                JSON.parse(
                    '{' +
                    keys.map((v, i) => (i !== keys.length - 1 ? `"${v}":{` : `"${v}":`)).join('') +
                    obj[k] +
                    '}'.repeat(keys.length)
                )
            );
        } else acc[k] = obj[k];
        return acc;
    }, {});


































