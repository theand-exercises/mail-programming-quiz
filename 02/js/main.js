//0. common

const sumOfArray = array => array.reduce((a, b) => (a + b), 0);

const sequentialArrayToN = n => Array.from({length: n}, (v, i) => i + 1);

//1. Fibonacci
const fiboSeries = n => {
    return sequentialArrayToN(n).reduce((acc, cur, index) => {
        if (index < 2) {
            return acc.push(1), acc;
        } else {
            return acc.push(acc[index - 2] + acc[index - 1]), acc;
        }
    }, []);
};

const fiboNum = n => fiboSeries(n)[n - 1];


//1. naive way
const getSumOfEvenFiboNumNaiveWay = n => {
    return sumOfArray(fiboSeries(n).filter( e=> e%2===0 && e < n));
};

