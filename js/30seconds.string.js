

/*
 * https://30secondsofcode.org/
 */

//https://30secondsofcode.org/#bytesize
const byteSize = str => new Blob([str]).size;

//https://30secondsofcode.org/#capitalize
const capitalize = ([first, ...rest], lowerRest = false) =>
    first.toUpperCase() + (lowerRest ? rest.join('').toLowerCase() : rest.join(''));

//https://30secondsofcode.org/#capitalizeeveryword
const capitalizeEveryWord = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());

//https://30secondsofcode.org/#decapitalize
const decapitalize = ([first, ...rest], upperRest = false) =>
    first.toLowerCase() + (upperRest ? rest.join('').toUpperCase() : rest.join(''));

//https://30secondsofcode.org/#escapehtml
const escapeHTML = str =>
    str.replace(
        /[&<>'"]/g,
        tag =>
            ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag] || tag)
    );

//https://30secondsofcode.org/#escaperegexp
const escapeRegExp = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

//https://30secondsofcode.org/#fromcamelcase
const fromCamelCase = (str, separator = '_') =>
    str
        .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
        .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
        .toLowerCase();

//https://30secondsofcode.org/#isabsoluteurl
const isAbsoluteURL = str => /^[a-z][a-z0-9+.-]*:/.test(str);

//https://30secondsofcode.org/#isanagram
const isAnagram = (str1, str2) => {
    const normalize = str =>
        str
            .toLowerCase()
            .replace(/[^a-z0-9]/gi, '')
            .split('')
            .sort()
            .join('');
    return normalize(str1) === normalize(str2);
};

//https://30secondsofcode.org/#islowercase
const isLowerCase = str => str === str.toLowerCase();

//https://30secondsofcode.org/#isuppercase
const isUpperCase = str => str === str.toUpperCase();

//https://30secondsofcode.org/#mask
const mask = (cc, num = 4, mask = '*') =>
    ('' + cc).slice(0, -num).replace(/./g, mask) + ('' + cc).slice(-num);

//https://30secondsofcode.org/#pad
const pad = (str, length, char = ' ') =>
    str.padStart((str.length + length) / 2, char).padEnd(length, char);

//https://30secondsofcode.org/#palindrome
const palindrome = str => {
    const s = str.toLowerCase().replace(/[\W_]/g, '');
    return (
        s ===
        s
            .split('')
            .reverse()
            .join('')
    );
};

//https://30secondsofcode.org/#reversestring
const reverseString = str => [...str].reverse().join('');

//https://30secondsofcode.org/#sortcharactersinstring
const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');

//https://30secondsofcode.org/#splitlines
const splitLines = str => str.split(/\r?\n/);

//https://30secondsofcode.org/#stringpermutations
const stringPermutations = str => {
    if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
    return str
        .split('')
        .reduce(
            (acc, letter, i) =>
                acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),
            []
        );
};

//https://30secondsofcode.org/#striphtmltags
const stripHTMLTags = str => str.replace(/<[^>]*>/g, '');

//https://30secondsofcode.org/#tocamelcase
const toCamelCase = str => {
    let s =
        str &&
        str
            .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(x => x.slice(0, 1).toUpperCase() + x.slice(1).toLowerCase())
            .join('');
    return s.slice(0, 1).toLowerCase() + s.slice(1);
};

//https://30secondsofcode.org/#tokebabcase
const toKebabCase = str =>
    str &&
    str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('-');

//https://30secondsofcode.org/#tosnakecase
const toSnakeCase = str =>
    str &&
    str
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        .map(x => x.toLowerCase())
        .join('_');

//https://30secondsofcode.org/#truncatestring
const truncateString = (str, num) =>
    str.length > num ? str.slice(0, num > 3 ? num - 3 : num) + '...' : str;

//https://30secondsofcode.org/#unescapehtml
const unescapeHTML = str =>
    str.replace(
        /&amp;|&lt;|&gt;|&#39;|&quot;/g,
        tag =>
            ({
                '&amp;': '&',
                '&lt;': '<',
                '&gt;': '>',
                '&#39;': "'",
                '&quot;': '"'
            }[tag] || tag)
    );

//https://30secondsofcode.org/#urljoin
const URLJoin = (...args) =>
    args
        .join('/')
        .replace(/[\/]+/g, '/')
        .replace(/^(.+):\//, '$1://')
        .replace(/^file:/, 'file:/')
        .replace(/\/(\?|&|#[^!])/g, '$1')
        .replace(/\?/g, '&')
        .replace('&', '?');

//https://30secondsofcode.org/#words
const words = (str, pattern = /[^a-zA-Z-]+/) => str.split(pattern).filter(Boolean);






























