//0. common


//3. benchmark
const timeIt = (n, name, expected, func) => {
    console.group(`${name} : ${n}`);

    console.assert(func(n) === expected, `${name} - expected ${expected}, but actual ${func(n)}`);

    console.groupEnd();
};


