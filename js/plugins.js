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

const timeIt = (n, name, expected, func, equalFn, args) => {
    console.group(`${name} : ${n}`);

    if (typeof equalFn !== "function") {
        equalFn = (a, b) => a === b;
    }

    const result = func(n, args);
    console.assert(equalFn(result, expected), `${name} - expected [${expected}], but actual [${result}]`);

    console.groupEnd();
};
