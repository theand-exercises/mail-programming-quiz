console.log(`==========Using console.time + ES6 : ${COUNT} loops`);

(() => {
    const arr = [];
    const init = function () {
        for (let i = 0; i < COUNT; i++) {
            arr[i] = i;
        }
    };

    const times = function (label, func) {
        init();
        console.time(label);
        func();
        console.timeEnd(label);
    };

    const incr = v => v + COUNT / 10;
    const decr = v => v - COUNT / 10;
    const underHalf = v => v < COUNT;

    times("multiple for loops", () => {
        const copy = [];
        for (let i = 0, len = arr.length; i < len; i++) {
            copy[i] = incr(arr[i]);
        }
        const copy2 = [];
        for (let i = 0, len = copy.length; i < len; i++) {
            if (underHalf(copy[i])) {
                copy2.push(copy[i]);
            }
        }
        for (let i = 0, len = copy2.length; i < len; i++) {
            copy2[i] = decr(copy2[i]);
        }
        return copy2.join(",");
    });

    times("a for loop", () => {
        const copy = [];
        for (let i = 0, len = arr.length; i < len; i++) {
            let v = incr(arr[i]);
            if (underHalf(v)) {
                copy.push(decr(v));
            }
        }
        return copy.join(",");
    });


    times("stream like", () => arr.map(incr).filter(underHalf).map(decr).join(","));
})();
