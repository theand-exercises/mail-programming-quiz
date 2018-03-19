// Avoid `console` errors in browsers that lack a console.
(function () {
    var method;
    var noop = function () {
    };
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

//https://30secondsofcode.org/#equals
if( typeof equals !== "function") {
    window.equals = (a, b) => {
        if (a === b) return true;
        if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
        if (!a || !b || (typeof a != 'object' && typeof b !== 'object')) return a === b;
        if (a === null || a === undefined || b === null || b === undefined) return false;
        if (a.prototype !== b.prototype) return false;
        let keys = Object.keys(a);
        if (keys.length !== Object.keys(b).length) return false;
        return keys.every(k => equals(a[k], b[k]));
    };
}

const timeIt = (n, name, expected, func, equalFn, args) => {
    console.group(`${name} : ${n}`);

    if (typeof equalFn !== "function") {
        equalFn = equals;
    }

    const result = func(n, args);
    console.assert(equalFn(result, expected), `${name} - expected [${expected}], but actual [${result}]`);

    console.groupEnd();
};
