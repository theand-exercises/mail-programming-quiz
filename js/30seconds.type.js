

/*
 * https://30secondsofcode.org/
 */

//https://30secondsofcode.org/#gettype
const getType = v =>
    v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase();

//https://30secondsofcode.org/#is
const is = (type, val) => val instanceof type;

//https://30secondsofcode.org/#isarraylike
const isArrayLike = val => {
    try {
        return [...val], true;
    } catch (e) {
        return false;
    }
};

//https://30secondsofcode.org/#isboolean
const isBoolean = val => typeof val === 'boolean';

//https://30secondsofcode.org/#isempty
const isEmpty = val => val == null || !(Object.keys(val) || val).length;

//https://30secondsofcode.org/#isfunction
const isFunction = val => typeof val === 'function';

//https://30secondsofcode.org/#isnil
const isNil = val => val === undefined || val === null;

//https://30secondsofcode.org/#isnull
const isNull = val => val === null;

//https://30secondsofcode.org/#isnumber
const isNumber = val => typeof val === 'number';

//https://30secondsofcode.org/#isobject
const isObject = obj => obj === Object(obj);

//https://30secondsofcode.org/#isobjectlike
const isObjectLike = val => val !== null && typeof val === 'object';

//https://30secondsofcode.org/#isplainobject
const isPlainObject = val => !!val && typeof val === 'object' && val.constructor === Object;

//https://30secondsofcode.org/#isprimitive
const isPrimitive = val => !['object', 'function'].includes(typeof val) || val === null;

//https://30secondsofcode.org/#isstring
const isString = val => typeof val === 'string';

//https://30secondsofcode.org/#issymbol
const isSymbol = val => typeof val === 'symbol';

//https://30secondsofcode.org/#isundefined
const isUndefined = val => val === undefined;

//https://30secondsofcode.org/#isvalidjson
const isValidJSON = obj => {
    try {
        JSON.parse(obj);
        return true;
    } catch (e) {
        return false;
    }
};






































