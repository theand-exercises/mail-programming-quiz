

/*
 * https://30secondsofcode.org/
 */

//https://30secondsofcode.org/#all
const all = (arr, fn = Boolean) => arr.every(fn);

//https://30secondsofcode.org/#any
const any = (arr, fn = Boolean) => arr.some(fn);

//https://30secondsofcode.org/#chunk
const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
    );

//https://30secondsofcode.org/#compact
const compact = arr => arr.filter(Boolean);

//https://30secondsofcode.org/#countby
const countBy = (arr, fn) =>
    arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
        acc[val] = (acc[val] || 0) + 1;
        return acc;
    }, {});

//https://30secondsofcode.org/#countoccurrences
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a + 0), 0);

//https://30secondsofcode.org/#deepflatten
const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));

//https://30secondsofcode.org/#difference
const difference = (a, b) => {
    const s = new Set(b);
    return a.filter(x => !s.has(x));
};

//https://30secondsofcode.org/#differenceby
const differenceBy = (a, b, fn) => {
    const s = new Set(b.map(v => fn(v)));
    return a.filter(x => !s.has(fn(x)));
};

//https://30secondsofcode.org/#differencewith
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);


//https://30secondsofcode.org/#drop
const drop = (arr, n = 1) => arr.slice(n);

//https://30secondsofcode.org/#dropright
const dropRight = (arr, n = 1) => arr.slice(0, -n);

//https://30secondsofcode.org/#droprightwhile
const dropRightWhile = (arr, func) => {
    while (arr.length > 0 && !func(arr[arr.length - 1])) arr = arr.slice(0, -1);
    return arr;
};

//https://30secondsofcode.org/#dropwhile
const dropWhile = (arr, func) => {
    while (arr.length > 0 && !func(arr[0])) arr = arr.slice(1);
    return arr;
};

//https://30secondsofcode.org/#everynth
const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);

//https://30secondsofcode.org/#filternonunique
const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

//https://30secondsofcode.org/#findlast
const findLast = (arr, fn) => arr.filter(fn).slice(-1)[0];

//https://30secondsofcode.org/#findlastindex
const findLastIndex = (arr, fn) =>
    arr
        .map((val, i) => [i, val])
        .filter(val => fn(val[1], val[0], arr))
        .slice(-1)[0][0];

//https://30secondsofcode.org/#flatten
const flatten = (arr, depth = 1) =>
    depth !== 1
        ? arr.reduce((a, v) => a.concat(Array.isArray(v) ? flatten(v, depth - 1) : v), [])
        : arr.reduce((a, v) => a.concat(v), []);

//https://30secondsofcode.org/#foreachright
const forEachRight = (arr, callback) =>
    arr
        .slice(0)
        .reverse()
        .forEach(callback);

//https://30secondsofcode.org/#groupby
const groupBy = (arr, fn) =>
    arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
        acc[val] = (acc[val] || []).concat(arr[i]);
        return acc;
    }, {});

//https://30secondsofcode.org/#head
const head = arr => arr[0];

//https://30secondsofcode.org/#indexofall
const indexOfAll = (arr, val) => {
    const indices = [];
    arr.forEach((el, i) => el === val && indices.push(i));
    return indices;
};

//https://30secondsofcode.org/#initial
const initial = arr => arr.slice(0, -1);

//https://30secondsofcode.org/#initialize2darray
const initialize2DArray = (w, h, val = null) =>
    Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val));

//https://30secondsofcode.org/#initializearraywithrange
const initializeArrayWithRange = (end, start = 0, step = 1) =>
    Array.from({ length: Math.ceil((end + 1 - start) / step) }).map((v, i) => i * step + start);


//https://30secondsofcode.org/#initializearraywithvalues
const initializeArrayWithValues = (n, val = 0) => Array(n).fill(val);

//https://30secondsofcode.org/#intersection
const intersection = (a, b) => {
    const s = new Set(b);
    return a.filter(x => s.has(x));
};

//https://30secondsofcode.org/#intersectionby
const intersectionBy = (a, b, fn) => {
    const s = new Set(b.map(x => fn(x)));
    return a.filter(x => s.has(fn(x)));
};

//https://30secondsofcode.org/#intersectionwith
const intersectionWith = (a, b, comp) => a.filter(x => b.findIndex(y => comp(x, y)) !== -1);

//https://30secondsofcode.org/#issorted
const isSorted = arr => {
    const direction = arr[0] > arr[1] ? -1 : 1;
    for (let [i, val] of arr.entries())
        if (i === arr.length - 1) return direction;
        else if ((val - arr[i + 1]) * direction > 0) return 0;
};

//https://30secondsofcode.org/#join
const join = (arr, separator = ',', end = separator) =>
    arr.reduce(
        (acc, val, i) =>
            i === arr.length - 2
                ? acc + val + end
                : i === arr.length - 1 ? acc + val : acc + val + separator,
        ''
    );

//https://30secondsofcode.org/#last
const last = arr => arr[arr.length - 1];


//https://30secondsofcode.org/#mapobject
const mapObject = (arr, fn) =>
    (a => (
        (a = [arr, arr.map(fn)]), a[0].reduce((acc, val, ind) => ((acc[val] = a[1][ind]), acc), {})
    ))();

//https://30secondsofcode.org/#maxn
const maxN = (arr, n = 1) => [...arr].sort((a, b) => b - a).slice(0, n);

//https://30secondsofcode.org/#minn
const minN = (arr, n = 1) => [...arr].sort((a, b) => a - b).slice(0, n);

//https://30secondsofcode.org/#none
const none = (arr, fn = Boolean) => !arr.some(fn);

//https://30secondsofcode.org/#nthelement
const nthElement = (arr, n = 0) => (n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];

//https://30secondsofcode.org/#partition
const partition = (arr, fn) =>
    arr.reduce(
        (acc, val, i, arr) => {
            acc[fn(val, i, arr) ? 0 : 1].push(val);
            return acc;
        },
        [[], []]
    );

//https://30secondsofcode.org/#permutations
const permutations = arr => {
    if (arr.length <= 2) return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
    return arr.reduce(
        (acc, item, i) =>
            acc.concat(
                permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map(val => [item, ...val])
            ),
        []
    );
};

//https://30secondsofcode.org/#pull
const pull = (arr, ...args) => {
    let argState = Array.isArray(args[0]) ? args[0] : args;
    let pulled = arr.filter((v, i) => !argState.includes(v));
    arr.length = 0;
    pulled.forEach(v => arr.push(v));
};

//https://30secondsofcode.org/#pullatindex
const pullAtIndex = (arr, pullArr) => {
    let removed = [];
    let pulled = arr
        .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
        .filter((v, i) => !pullArr.includes(i));
    arr.length = 0;
    pulled.forEach(v => arr.push(v));
    return removed;
};

//https://30secondsofcode.org/#pullatvalue
const pullAtValue = (arr, pullArr) => {
    let removed = [],
        pushToRemove = arr.forEach((v, i) => (pullArr.includes(v) ? removed.push(v) : v)),
        mutateTo = arr.filter((v, i) => !pullArr.includes(v));
    arr.length = 0;
    mutateTo.forEach(v => arr.push(v));
    return removed;
};

//https://30secondsofcode.org/#pullby
const pullBy = (arr, ...args) => {
    const length = args.length;
    let fn = length > 1 ? args[length - 1] : undefined;
    fn = typeof fn == 'function' ? (args.pop(), fn) : undefined;
    let argState = (Array.isArray(args[0]) ? args[0] : args).map(val => fn(val));
    let pulled = arr.filter((v, i) => !argState.includes(fn(v)));
    arr.length = 0;
    pulled.forEach(v => arr.push(v));
};

//https://30secondsofcode.org/#reducedfilter
const reducedFilter = (data, keys, fn) =>
    data.filter(fn).map(el =>
        keys.reduce((acc, key) => {
            acc[key] = el[key];
            return acc;
        }, {})
    );

//https://30secondsofcode.org/#reducesuccessive
const reduceSuccessive = (arr, fn, acc) =>
    arr.reduce((res, val, i, arr) => (res.push(fn(res.slice(-1)[0], val, i, arr)), res), [acc]);

//https://30secondsofcode.org/#reducewhich
const reduceWhich = (arr, comparator = (a, b) => a - b) =>
    arr.reduce((a, b) => (comparator(a, b) >= 0 ? b : a));


//https://30secondsofcode.org/#remove
const remove = (arr, func) =>
    Array.isArray(arr)
        ? arr.filter(func).reduce((acc, val) => {
            arr.splice(arr.indexOf(val), 1);
            return acc.concat(val);
        }, [])
        : [];

//https://30secondsofcode.org/#sample
const sample = arr => arr[Math.floor(Math.random() * arr.length)];

//https://30secondsofcode.org/#samplesize
const sampleSize = ([...arr], n = 1) => {
    let m = arr.length;
    while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr.slice(0, n);
};

//https://30secondsofcode.org/#shuffle
const shuffle = ([...arr]) => {
    let m = arr.length;
    while (m) {
        const i = Math.floor(Math.random() * m--);
        [arr[m], arr[i]] = [arr[i], arr[m]];
    }
    return arr;
};

//https://30secondsofcode.org/#similarity
const similarity = (arr, values) => arr.filter(v => values.includes(v));


//https://30secondsofcode.org/#stablesort
const stableSort = (arr, compare) =>
    arr
        .map((item, index) => ({ item, index }))
        .sort((a, b) => compare(a.item, b.item) || a.index - b.index)
        .map(({ item }) => item);

//https://30secondsofcode.org/#tail
const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);

//https://30secondsofcode.org/#take
const take = (arr, n = 1) => arr.slice(0, n);

//https://30secondsofcode.org/#takeright
const takeRight = (arr, n = 1) => arr.slice(arr.length - n, arr.length);

//https://30secondsofcode.org/#takerightwhile
const takeRightWhile = (arr, func) => {
    for (let i of arr.reverse().keys())
        if (func(arr[i])) return arr.reverse().slice(arr.length - i, arr.length);
    return arr;
};

//https://30secondsofcode.org/#takewhile
const takeWhile = (arr, func) => {
    for (let i of arr.keys()) if (func(arr[i])) return arr.slice(0, i);
    return arr;
};

//https://30secondsofcode.org/#union
const union = (a, b) => Array.from(new Set([...a, ...b]));

//https://30secondsofcode.org/#unionby
const unionBy = (a, b, fn) => {
    const s = new Set(a.map(v => fn(v)));
    return Array.from(new Set([...a, ...b.filter(x => !s.has(fn(x)))]));
};

//https://30secondsofcode.org/#unionwith
const unionWith = (a, b, comp) =>
    Array.from(new Set([...a, ...b.filter(x => a.findIndex(y => comp(x, y)) === -1)]));

//https://30secondsofcode.org/#uniqueelements
const uniqueElements = arr => [...new Set(arr)];

//https://30secondsofcode.org/#unzip
const unzip = arr =>
    arr.reduce(
        (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
        Array.from({
            length: Math.max(...arr.map(x => x.length))
        }).map(x => [])
    );

//https://30secondsofcode.org/#unzipwith
const unzipWith = (arr, fn) =>
    arr
        .reduce(
            (acc, val) => (val.forEach((v, i) => acc[i].push(v)), acc),
            Array.from({
                length: Math.max(...arr.map(x => x.length))
            }).map(x => [])
        )
        .map(val => fn(...val));

//https://30secondsofcode.org/#without
const without = (arr, ...args) => arr.filter(v => !args.includes(v));

//https://30secondsofcode.org/#xprod
const xProd = (a, b) => a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), []);

//https://30secondsofcode.org/#zip
const zip = (...arrays) => {
    const maxLength = Math.max(...arrays.map(x => x.length));
    return Array.from({ length: maxLength }).map((_, i) => {
        return Array.from({ length: arrays.length }, (_, k) => arrays[k][i]);
    });
};

//https://30secondsofcode.org/#zipobject
const zipObject = (props, values) =>
    props.reduce((obj, prop, index) => ((obj[prop] = values[index]), obj), {});

//https://30secondsofcode.org/#zipwith
const zipWith = (...arrays) => {
    const length = arrays.length;
    let fn = length > 1 ? arrays[length - 1] : undefined;
    fn = typeof fn == 'function' ? (arrays.pop(), fn) : undefined;
    const maxLength = Math.max(...arrays.map(x => x.length));
    const result = Array.from({ length: maxLength }).map((_, i) => {
        return Array.from({ length: arrays.length }, (_, k) => arrays[k][i]);
    });
    return fn ? result.map(arr => fn(...arr)) : result;
};

