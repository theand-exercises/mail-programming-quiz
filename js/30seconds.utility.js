

/*
 * https://30secondsofcode.org/
 */

//https://30secondsofcode.org/#castarray
const castArray = val => (Array.isArray(val) ? val : [val]);

//https://30secondsofcode.org/#coalesce
const coalesce = (...args) => args.find(_ => ![undefined, null].includes(_));

//https://30secondsofcode.org/#coalescefactory
const coalesceFactory = valid => (...args) => args.find(valid);

//https://30secondsofcode.org/#extendhex
const extendHex = shortHex =>
    '#' +
    shortHex
        .slice(shortHex.startsWith('#') ? 1 : 0)
        .split('')
        .map(x => x + x)
        .join('');

//https://30secondsofcode.org/#geturlparameters
const getURLParameters = url =>
    (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
        (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
        {}
    );

//https://30secondsofcode.org/#hextorgb
const hexToRGB = hex => {
    let alpha = false,
        h = hex.slice(hex.startsWith('#') ? 1 : 0);
    if (h.length === 3) h = [...h].map(x => x + x).join('');
    else if (h.length === 8) alpha = true;
    h = parseInt(h, 16);
    return (
        'rgb' +
        (alpha ? 'a' : '') +
        '(' +
        (h >>> (alpha ? 24 : 16)) +
        ', ' +
        ((h & (alpha ? 0x00ff0000 : 0x00ff00)) >>> (alpha ? 16 : 8)) +
        ', ' +
        ((h & (alpha ? 0x0000ff00 : 0x0000ff)) >>> (alpha ? 8 : 0)) +
        (alpha ? `, ${h & 0x000000ff}` : '') +
        ')'
    );
};

//https://30secondsofcode.org/#httpget
const httpGet = (url, callback, err = console.error) => {
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = () => callback(request.responseText);
    request.onerror = () => err(request);
    request.send();
};

//https://30secondsofcode.org/#httppost
const httpPost = (url, data, callback, err = console.error) => {
    const request = new XMLHttpRequest();
    request.open('POST', url, true);
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.onload = () => callback(request.responseText);
    request.onerror = () => err(request);
    request.send(data);
};

//https://30secondsofcode.org/#mostperformant
const mostPerformant = (fns, iterations = 10000) => {
    const times = fns.map(fn => {
        const before = performance.now();
        for (let i = 0; i < iterations; i++) fn();
        return performance.now() - before;
    });
    return times.indexOf(Math.min(...times));
};

//https://30secondsofcode.org/#parsecookie
const parseCookie = str =>
    str
        .split(';')
        .map(v => v.split('='))
        .reduce((acc, v) => {
            acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
            return acc;
        }, {});


//https://30secondsofcode.org/#prettybytes
const prettyBytes = (num, precision = 3, addSpace = true) => {
    const UNITS = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    if (Math.abs(num) < 1) return num + (addSpace ? ' ' : '') + UNITS[0];
    const exponent = Math.min(Math.floor(Math.log10(num < 0 ? -num : num) / 3), UNITS.length - 1);
    const n = Number(((num < 0 ? -num : num) / 1000 ** exponent).toPrecision(precision));
    return (num < 0 ? '-' : '') + n + (addSpace ? ' ' : '') + UNITS[exponent];
};

//https://30secondsofcode.org/#randomhexcolorcode
const randomHexColorCode = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
};

//https://30secondsofcode.org/#rgbtohex
const RGBToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');

//https://30secondsofcode.org/#serializecookie
const serializeCookie = (name, val) => `${encodeURIComponent(name)}=${encodeURIComponent(val)}`;

//https://30secondsofcode.org/#timetaken
const timeTaken = callback => {
    console.time('timeTaken');
    const r = callback();
    console.timeEnd('timeTaken');
    return r;
};

//https://30secondsofcode.org/#tocurrency
const toCurrency = (n, curr, LanguageFormat = undefined) =>
    Intl.NumberFormat(LanguageFormat, { style: 'currency', currency: curr }).format(n);

//https://30secondsofcode.org/#todecimalmark
const toDecimalMark = num => num.toLocaleString('en-US');

//https://30secondsofcode.org/#toordinalsuffix
const toOrdinalSuffix = num => {
    const int = parseInt(num),
        digits = [int % 10, int % 100],
        ordinals = ['st', 'nd', 'rd', 'th'],
        oPattern = [1, 2, 3, 4],
        tPattern = [11, 12, 13, 14, 15, 16, 17, 18, 19];
    return oPattern.includes(digits[0]) && !tPattern.includes(digits[1])
        ? int + ordinals[digits[0] - 1]
        : int + ordinals[3];
};

//https://30secondsofcode.org/#validatenumber
const validateNumber = n => !isNaN(parseFloat(n)) && isFinite(n) && Number(n) == n;

//https://30secondsofcode.org/#validatenumber
const yesNo = (val, def = false) =>
    /^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def;










































