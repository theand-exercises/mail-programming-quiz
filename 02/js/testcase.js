console.log("-----------------------Fibo.");


const getFiboNumAnswerFromTable = (n) => [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144][n - 1];

console.log(fiboSeries(12));

for (let i in "123456789") {
    timeIt(parseInt(i), Object.keys({i})[0], getFiboNumAnswerFromTable(i), fiboNum);

}


console.log("-----------------------Naive");

let func;

func = getSumOfEvenFiboNumNaiveWay;
const ex1 = 12;
timeIt(ex1, Object.keys({ex1})[0], 10, func);

