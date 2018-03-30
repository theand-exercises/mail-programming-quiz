console.log("==========Using console.log + Date.getTime");

(() => {
    var COUNT = 1000000;
    var arr = [];
    var init = function () {
        for (var i = 0; i < COUNT; i++) {
            arr[i] = i;
        }
        ;
    }

    var times = function (func) {
        init();
        var start = new Date().getTime();
        func();
        return new Date().getTime() - start;
    };

    var incr = function (v) {
        return v + COUNT / 10
    };
    var decr = function (v) {
        return v - COUNT / 10
    };
    var underHalf = function (v) {
        return v < COUNT
    };

    console.log("for loops", times(function () {
        var copy = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            copy[i] = incr(arr[i]);
        }
        var copy2 = [];
        for (var i = 0, len = copy.length; i < len; i++) {
            if (underHalf(copy[i])) {
                copy2.push(copy[i]);
            }
        }
        for (var i = 0, len = copy2.length; i < len; i++) {
            copy2[i] = decr(copy2[i]);
        }
        return copy2.join(",");
    }));

    console.log("for loop", times(function () {
        var copy = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            var v = incr(arr[i]);
            if (underHalf(v)) {
                copy.push(decr(v));
            }
        }
        return copy.join(",");
    }));

    console.log("stream like", times(function () {
        return arr.map(incr).filter(underHalf).map(decr).join(",");
    }));
})();
