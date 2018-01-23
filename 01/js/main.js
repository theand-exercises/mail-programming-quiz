const randomNumber = () => Math.floor(Math.random() * 201) - 100;

const randomNumberArray = n => Array.from({length: n}, () => randomNumber());

// console.log(randomNumber());
// console.log(randomNumber());

// console.log(randomNumberArray(10));
// console.log(randomNumberArray(100));
// console.log(JSON.stringify(randomNumberArray(1000)));
// console.log(JSON.stringify(randomNumberArray(3000)));


const getConsecutiveSumNaiveWay = array => array.map((e, i, a) => a.slice(i).reduce((a, b) => a + b, 0));

const getLargestValue = array => Math.max(...array);

const timeIt = (arr, name, expected, func) => {
    console.group(name);
    console.time(name);
    getLargestValue(func(arr));
    console.timeEnd(name);

    console.log(getLargestValue(func(arr)));
    console.assert(getLargestValue(func(arr)) === expected, name);
    console.groupEnd(name);
};

const no1 = [-1, 3, -1, 5];
const no2 = [-5, -3, -1];
const no3 = [2, 4, -2, -3, 8];

timeIt(no1, Object.keys({no1})[0], 7, getConsecutiveSumNaiveWay);
timeIt(no2, Object.keys({no2})[0], -1, getConsecutiveSumNaiveWay);
timeIt(no3, Object.keys({no3})[0], 9, getConsecutiveSumNaiveWay);

const arr100 = [-50, 7, 24, -54, 67, -86, -30, 4, 64, 26, -57, 57, 66, -53, 85, -42, -95, -41, 33, 59, -44, 29, 82, 77, -95, 56, 84, -66, 32, -58, 98, -76, 63, -94, 26, 70, 69, 67, 59, -3, 99, -54, 39, -6, -37, -56, -11, -75, -52, -23, -84, -19, 79, 81, 72, -99, 35, -12, -81, 79, 80, 44, -70, 28, -50, 22, -74, 79, -26, -83, 38, 97, 37, 52, -5, -16, -58, -6, 49, 53, -46, -51, -82, 82, 98, 45, -12, 1, 73, 2, 7, -43, 86, 27, -34, -26, 58, -8, 28, 49];

timeIt(arr100, Object.keys({arr100})[0], 802, getConsecutiveSumNaiveWay);

const arr1000 = [99, -9, -5, 51, 5, -46, -83, -71, -77, -100, -15, 89, -41, 98, -43, 61, -26, 86, 10, 32, -19, 77, -47, 61, 12, 10, 57, 56, -85, -19, 0, -100, 94, -31, 84, -68, -77, -85, 35, 59, 25, 20, 46, -63, -29, -5, -4, 83, 53, -51, 28, 42, -27, 27, 85, 82, 95, -1, 94, 83, 3, 29, 57, 62, 38, 53, 90, -77, 49, -52, 84, -69, 38, 91, -71, -23, 15, -80, 55, 40, -73, 74, 54, -12, -76, -61, -30, -99, -3, -11, -89, 99, 1, 67, -99, 28, -92, -85, -50, -59, 56, 18, -85, -98, 59, 38, -35, 50, 22, -54, 34, -8, -88, 21, -37, -38, 58, 79, 70, -72, 36, -53, 45, -65, -1, 88, 93, 87, 65, 1, 74, -50, 27, 86, -64, -5, 93, 37, 43, -91, 55, 17, 89, 14, -76, 30, -37, 88, -38, -28, -77, 56, 71, 55, -95, 81, 100, 68, -3, -88, -88, -30, 61, -1, 0, -71, 94, -56, 65, 71, -83, 29, 48, 98, -95, 1, -73, 45, 15, 79, -61, -46, 97, -61, 63, -33, -40, -54, 88, -89, -39, -99, -16, -44, 39, 30, -80, 47, -5, -67, 2, -71, -13, -27, -62, -78, 21, 86, 31, -63, -70, -8, 74, -60, -21, 44, -14, -27, 98, -67, -35, -23, 14, 8, -17, 2, -46, -56, -89, 28, 56, -76, 32, 11, -9, -100, -77, -93, 41, -82, -41, 29, -70, 64, -66, 96, 97, 83, -6, -28, 65, 59, 77, 51, 74, -56, -65, 25, 53, -51, -38, 86, 24, -95, -10, 45, -11, -80, 38, -45, -41, 17, -60, 76, 51, -81, 87, -100, -83, 10, -17, 13, 49, 99, 55, 17, 91, -82, -58, 47, 43, -66, -37, -7, 76, -4, -29, -94, 22, -64, 100, 12, 26, -55, -74, -66, 55, 16, 96, 65, -96, -16, 11, 27, 63, -12, 39, -100, -96, -49, 51, -73, -32, 9, -41, -19, 2, 60, -93, -94, 49, 66, 20, 73, 33, -26, 94, 20, 49, -19, -20, 77, -22, -32, 35, 91, -96, 56, -70, -65, 47, 53, -31, 0, 48, -48, -38, 68, 34, 59, -89, -54, 11, 62, -76, -5, -14, -7, 45, 95, 61, 20, 50, -71, -100, -14, -27, 38, 52, 4, 59, -5, 96, 75, -96, 25, -96, -79, -47, 0, -91, -76, 71, -3, -73, 8, 5, 99, 15, 46, 11, -41, -40, 48, 98, 18, -63, -25, 41, -95, -10, -85, 62, -13, 72, -56, -86, 95, -89, 72, -75, -21, 37, 32, 90, -52, 91, -54, -13, -87, -48, 34, -14, 57, -13, -76, 64, 34, -71, 59, -93, 88, 65, 22, -44, -47, -9, 29, -42, -89, 8, -70, 67, -73, 26, -72, 50, -99, -55, 57, -29, -66, -26, 93, -48, -4, 44, 2, 46, 6, 10, 9, 38, 7, -27, -89, -18, 76, -63, -84, -75, 12, 3, -95, 72, 12, 64, 72, 28, 71, 95, 95, 80, 12, -50, -72, 24, -58, -78, -96, 74, 40, -73, -5, 44, -79, 73, 73, 80, -76, 71, -59, -42, -50, -21, -2, 37, 56, -55, -27, 65, -27, -3, -96, -97, -44, -82, 53, -33, -38, -71, 39, -56, 69, 61, 100, -40, 39, 5, 56, 23, -9, 6, 49, 3, 40, 60, -27, -37, 60, 31, -63, 29, 52, 69, 9, -63, 66, 60, 19, 48, 20, -97, 36, 75, 29, -75, -29, 78, 61, 81, 65, -65, -42, -96, -36, -25, 57, -92, -44, -95, 26, -67, -55, 64, -71, 38, -48, 87, 78, 36, 27, -90, -39, 91, -78, 29, -52, 78, 36, -88, -96, 58, 40, 59, -90, 98, -96, 55, 46, 86, -81, 36, -25, -19, -72, 30, 71, 35, 98, -92, 53, -16, 61, 39, 15, 95, -40, 0, 22, -59, -4, 33, 55, -89, -25, -59, -9, -61, -67, 93, -2, 14, -58, -28, 91, 81, 4, -71, 73, -48, 35, -6, 6, -73, -54, -55, -46, 19, 80, -25, 29, 24, -53, 76, -35, 98, 78, -100, 66, -19, 99, -81, 39, -14, -3, -50, -32, -58, 19, -68, 9, -66, 39, 96, -83, -92, 55, 28, -63, 39, 65, -93, 53, 40, 95, -85, 77, -62, -22, -32, -70, 28, -96, 31, 7, -51, -63, 52, -61, 2, 54, -54, -88, -79, 86, 65, 85, 44, 73, -77, 5, 93, -38, -93, -37, -45, 74, -38, -29, 53, -76, -80, 8, 80, -22, -32, 84, 78, -11, 74, 78, -76, 100, 55, -54, -33, 47, -25, -64, 27, -68, 54, 22, 78, 82, 30, -22, 28, -59, 64, 20, -7, -36, 20, -22, -34, 72, 22, -93, -32, -57, -54, -41, 83, 56, 76, 24, -76, 42, -89, 60, 92, -71, -19, 80, -5, -12, -7, 79, 12, 74, -60, -69, 59, 92, 29, 45, 16, -31, -67, 79, -44, 36, -50, -10, 91, 43, -58, 38, 83, -14, -12, 92, -4, -39, -35, 36, 27, 44, -5, -68, 91, 11, -74, 0, -93, 81, 100, -65, 77, 16, -56, 28, -98, -47, 73, 61, 89, -6, -11, 12, 57, 1, 13, -66, -87, -58, -1, -32, -39, -84, 43, -37, -12, -30, 11, -38, 57, 28, -11, 73, 15, -87, -90, 80, -57, -71, -95, 3, 29, 94, 72, -40, 15, -57, -38, -21, -81, 80, 32, 73, -16, -60, -21, -93, -25, -34, 6, 25, -26, 31, 71, 28, -48, -50, 69, 78, 83, -79, -25, 25, -15, 95, -60, 70, -91, -44, 7, 96, -65, 81, -48, 84, -10, -62, 92, -33, -93, 81, -13, 19, 71, -41, 80, 68, 78, 41, 43, 75, -61, -78, -72, -11, -17, 77, 65, -90, 51, 41, 58, -57, 56, -42, -63, -48, 50, -34, -62, -23, -80, 90, -77, -82, -95, 4, -54, -100, -2, 66, 40, 61, -78, -16, 91, -99, -14, 37, -47, -57, -49, 20, -37, 68, 47, 66, 87, 54, 62, 28, -50, -21, -88, 18, 45, -70, -30, 72, 67, 87, -62, -8, 19, 72, 84, 7, 0, -76, -84, 70];

timeIt(arr1000, Object.keys({arr1000})[0], 1294, getConsecutiveSumNaiveWay);

const arr3000 = [-39, -24, -87, -61, -83, -62, -68, 39, 1, 47, 68, 96, -36, -66, 63, -59, -79, -52, 24, 17, 16, 60, 50, 64, -20, 34, 83, 62, -31, -26, 6, -56, 61, -36, 89, 51, -79, 1, -34, -100, -26, -59, -87, 23, 100, 52, 95, -38, 9, -39, 81, -42, -27, -53, -4, -88, -100, 54, -27, 46, -83, 42, -63, 63, 33, 15, -77, 77, 41, -59, 93, -40, 13, 4, 50, 86, -54, -24, -77, 85, -90, -70, -54, -14, 65, -57, 28, -4, 13, -32, 48, -81, -72, -88, -10, -80, -51, -17, 35, 39, -54, -60, -13, 72, 64, 26, -93, 51, -93, 66, 6, -35, 34, 9, -53, -5, 19, 75, -46, -76, 14, -22, -52, 32, 40, 52, -93, 69, -23, -13, -19, -14, 29, 64, 6, 0, 68, -56, -93, -42, 3, 97, -44, 76, 55, 92, -10, 58, 43, -2, 30, 71, 84, 47, -31, -57, -74, 81, -67, 39, 35, -67, -79, 38, 1, -2, 45, -38, 96, -18, -23, -16, 84, 11, 50, 57, -17, -8, 85, -43, 78, 15, 80, 19, 81, 10, 29, -80, -84, 54, -31, -4, 94, -94, -72, -72, 90, -81, 51, -74, -67, 20, -26, 57, 7, -33, -5, -67, -1, 58, 87, -71, -20, 81, 60, -7, 67, 8, 66, -52, 50, -51, 26, -89, -65, 77, 28, -23, -73, -27, 55, 94, -14, 39, 98, -99, 17, -3, -38, 41, -18, 92, -98, -53, 71, -68, 80, -17, 29, -59, -40, -2, -91, -48, 95, -4, 49, 67, 66, 76, -25, 50, 58, 93, 60, -58, -26, -42, 86, 48, 28, 43, 6, -33, -38, 4, -100, 81, 5, 3, 10, -79, 51, -70, -96, 11, 92, 13, 15, -54, 39, 86, 38, -30, 63, -92, -5, -85, -79, 32, 36, 41, -19, 53, 11, 37, 72, -4, -22, -48, 4, -22, 79, -55, -42, 60, -87, -34, 20, -95, -63, -76, 4, -99, 8, 42, -16, -99, 82, 94, -77, -22, 44, -80, -28, -29, -13, -44, -31, -56, -12, 39, -21, -19, -80, 66, -49, 88, 11, -59, 80, -88, 37, 68, 69, 77, -64, -26, 11, -63, -66, -86, 42, 95, 84, 30, -80, -63, -59, 12, -23, 1, 13, 80, -47, -89, 68, 52, -58, 67, -65, 50, -60, -46, 5, -4, -83, 60, 93, 70, -41, 11, 22, -91, -58, -62, -70, -93, 39, 77, 10, 36, 67, -85, 44, -25, -36, 96, 22, 52, -86, 83, -70, 89, -98, 18, -81, -18, -65, -86, -14, 40, -96, 48, -66, 71, 92, -53, -47, 11, -45, 44, -9, 59, -25, -17, 70, 31, 81, -19, 40, -36, -19, -53, 27, 38, -3, -91, -40, 72, 58, 3, 3, 56, 3, -82, -54, 88, -92, 2, 22, 57, -33, -93, -61, 94, 85, 34, -71, 35, 49, 3, 30, 43, -46, -91, 47, 8, 84, 66, 57, -84, 95, -51, 21, 89, 97, 22, 89, -65, 14, 76, -84, 99, 66, -68, -97, 56, 31, 83, 84, -47, -96, -84, 15, -34, 82, -95, 58, 63, 53, -67, -89, 76, 91, 20, 54, 78, -20, -99, -59, -98, 18, -17, -14, -27, -97, -64, -88, -63, 3, -23, 90, 28, 77, 74, -93, 37, -70, -44, 61, 44, -22, -100, 21, -38, -84, -54, 44, -67, -24, 64, -2, -21, 73, -91, -99, -68, -94, 52, 62, -74, 2, 44, -69, 15, 80, -67, -65, -35, 59, -91, 30, -10, 6, 20, 55, 58, 43, -37, 82, -25, -55, -92, -29, -84, -23, -28, -58, 62, -63, -76, -94, -29, 28, -78, -14, -39, -23, 61, -46, 83, -50, 80, -52, -74, -97, 69, -37, -72, 95, 45, 47, 66, 34, -13, -2, 16, 97, -22, -21, -22, -30, 23, -49, 33, -89, 82, -45, -96, 59, 3, -99, -4, -18, -20, 44, 87, -56, 80, -35, -73, -88, -85, 84, -89, 6, -100, -83, 80, -71, 37, 73, -97, 72, -59, 73, -46, -100, 36, 84, -75, 39, 91, 25, -2, -36, -63, 79, -6, 81, -33, -21, 24, 92, 79, 73, 32, -11, 1, 54, 74, 56, 39, 74, 43, 30, 59, 56, -28, 10, 75, 10, 90, 54, 5, 31, -77, 81, 90, 36, -59, 13, -81, 33, 91, 90, -79, 30, 7, 80, 32, -11, 49, 6, -99, 25, 25, -65, 89, -44, -100, 15, 76, 1, 52, -21, 71, -98, 0, 66, -26, -87, 88, -92, -60, -41, 64, -29, 64, 37, -48, 45, 52, -43, -54, 53, -33, 1, 25, 51, 86, -99, -86, -79, 67, -100, -30, 66, 33, -57, 99, -34, -28, -47, -17, 82, 15, -43, -88, 20, 56, 53, -5, -76, -52, 93, -2, -58, 59, 90, 98, 13, -43, 20, 14, 100, -46, -56, 100, -37, -99, 65, 73, -32, 57, 51, 12, 99, 60, -75, -95, 65, -65, -96, 54, -8, -28, 54, 71, 38, 2, 21, -85, -23, 46, 0, 91, 73, 58, -63, -42, -1, -55, 22, -52, 44, -52, 17, 10, -3, -87, -18, 81, 35, -85, 59, 62, -72, 2, 2, -20, 58, -28, -83, -92, -68, 23, -93, 64, -74, 55, 42, -67, -35, 90, 47, 39, -89, 38, -33, -45, -22, -60, 13, -74, 96, 76, -75, -65, -53, -13, 87, 39, 83, -13, 22, -96, -54, 14, -8, -13, 41, 1, -58, 87, -13, -98, -99, 75, 88, 78, -29, 53, 83, -2, -95, 0, 9, 21, -39, 1, -44, -19, 28, 13, 24, 76, 66, -15, -51, 24, -10, -88, 37, -15, 39, -42, 21, -37, -28, 31, 5, 34, 11, -33, 70, 51, -37, 73, -89, -91, -12, 28, -8, 53, 97, -10, -52, -30, -39, -53, 31, -92, -91, 11, -17, -35, 45, -22, 3, -23, 69, 50, -8, -11, 74, 21, 49, 77, -21, 62, -84, -61, 53, -35, 52, 13, -53, -29, -87, -60, 21, -28, -30, 66, -68, -48, -78, 44, -74, -11, -5, -98, -22, -42, -49, 72, -4, -10, -20, -2, 17, -61, -98, -30, 19, -45, 96, 51, -1, 16, 83, -29, 81, 37, 69, -65, 59, 2, -10, 24, 31, 71, -45, 35, -60, -10, 59, 56, -45, 26, -31, 48, -24, -86, -67, 40, -90, 58, -89, -94, -40, 95, -18, 88, 100, 60, -55, -26, -1, 84, 87, -97, -24, 56, 4, 44, 34, -89, 36, 58, 96, 98, -10, 21, -16, -84, 48, -18, -31, -44, 36, -19, 71, 6, -42, 17, -16, -92, -24, -46, -58, 35, -13, -34, -6, 22, -2, -21, -34, 1, -46, 12, 2, -73, -72, -42, 97, 40, 54, 57, 97, -45, 9, 91, 35, 6, 51, 62, 28, 2, 91, -78, 69, -99, 72, 3, -83, -9, 57, -41, 62, 32, 56, 23, 14, 40, -94, 78, 100, 0, -11, 57, 87, -53, 61, 95, -29, 69, -40, -96, -76, -97, 51, 87, 57, -34, -30, 33, -67, -49, -26, -66, -19, -6, 5, 33, -91, 53, -91, 78, -10, -49, -38, -37, -30, 81, -77, -81, -36, -52, -10, -47, -37, 6, 67, 32, -63, 42, 3, -83, 19, -21, -59, -42, 64, 74, 21, -4, -93, 32, -73, 46, 62, 11, -82, 22, -34, 18, 32, -66, -65, -96, 100, -49, 19, 22, -80, -32, -61, -81, -73, 88, -79, -14, 6, -64, 31, -60, 37, 6, 58, -13, -24, 32, -100, 45, -37, 70, -65, -39, 61, -42, -97, 27, 24, 5, 73, 10, -66, -92, 28, 60, 70, -78, -75, -5, 77, 8, 75, 19, 83, 65, 80, 48, -56, -98, -36, 14, 96, 37, -55, 77, 81, 53, 60, 82, -59, 45, 9, -88, -24, 71, 85, 32, -9, 50, -61, -42, -95, 45, -30, -67, -46, 35, 35, 81, 34, -19, -100, 57, 13, -19, 93, -8, -24, 68, -2, 86, 100, -80, -67, -81, -36, -30, 19, -42, 17, 70, -46, 88, -31, 67, -30, 59, 80, 27, -5, -19, -97, 97, -25, 73, 1, -9, -10, 91, -31, 47, -86, -46, 31, -10, 5, -75, -31, -4, 51, 93, 5, 22, 38, -31, -69, -79, -69, -29, 36, 16, 85, 67, -70, 34, 21, -56, 94, 26, 81, -50, -63, -30, 93, 15, 31, -30, 39, -23, -25, -76, -46, -44, 11, -1, 58, -70, -40, -74, -31, -79, 61, 36, 2, 4, 45, 11, 18, 73, 42, 23, 24, 90, 4, 7, 0, -9, -98, 52, -90, -63, 7, 18, -26, 96, -75, 27, -13, -50, 62, 75, 37, 41, 80, -49, -91, 41, -22, -44, -16, -28, 40, 49, 94, -12, 58, 69, -98, -44, 92, -89, 54, -50, 31, 19, -68, -51, -78, -20, 33, -32, -82, 65, -98, -6, -57, -6, -72, -85, 83, 100, -5, 86, -51, -79, -37, 35, 27, 28, -74, -89, -63, 78, 89, 22, 57, 50, -99, -51, 44, -98, 11, -4, -29, 47, 15, 63, 88, 100, 43, -40, 100, 48, 50, -22, 3, 71, -82, 45, -44, -88, 93, 91, -63, 29, -36, 94, -44, -5, -83, 53, 39, 81, 87, -68, -33, 56, 91, 51, 80, 91, -92, -77, -12, -89, 75, -59, -51, -54, -7, -92, 69, -47, -93, -76, -20, -98, -93, -18, 74, 48, 82, 56, -85, -4, 89, 66, -96, 46, -34, -28, -65, 3, -60, 3, 44, -50, 36, -78, -16, -20, 2, -38, 16, 25, 80, -92, 86, 23, -74, 43, -12, -26, 13, 93, -55, 15, -43, 99, 80, -12, -67, 37, 91, 89, 13, 6, 20, -11, -9, 62, 5, 69, -25, 14, -51, -28, -65, 78, -12, -93, 49, 24, 40, 3, 70, 9, -90, -57, 64, 33, 24, 36, 68, 52, -73, -98, 42, -7, 10, 72, 56, -81, 81, 36, -10, -30, 39, 4, -81, -9, -93, -41, 97, -68, 67, 62, 76, 8, 93, -58, 78, -23, 56, -12, 63, 68, 86, -5, -30, 40, 25, 23, -78, -19, 25, -41, 26, -63, -69, -12, 17, -53, 79, -56, -33, -57, 48, -82, -59, -59, -30, -2, 24, 17, -29, 24, 13, -49, -70, 50, 2, -50, -91, 2, 97, -96, 22, 78, -28, 30, -65, 53, -63, -90, -80, -28, 10, -15, -51, -65, -86, -50, -79, -53, -55, 29, -55, 96, 6, -62, -39, -21, -38, -77, 1, 41, 86, -18, 11, -94, -25, 38, -64, -67, 0, -86, 6, -43, -18, 43, 89, -69, -85, -64, 1, -11, -62, -26, 25, 87, -17, -27, -82, 29, -100, 100, 96, 31, -52, 84, -92, -76, -30, -91, -86, -91, -63, 70, -31, 21, -25, 92, -32, 38, -56, -68, 93, -71, 39, -31, -18, 36, -83, 85, 49, 25, -35, -94, 30, 56, 15, 15, 50, 43, 87, -55, -2, -40, -28, 24, 28, -78, -94, 21, -66, 57, -21, 4, -59, -35, -67, 61, -74, 43, -67, -93, 81, -78, -93, -15, 18, -36, -70, -11, 36, -15, -55, 96, 20, 60, 52, 4, 35, -68, 6, 51, 65, -69, 33, -35, 31, 33, -1, 42, -25, -14, -95, 43, -48, -65, -85, 58, 21, -59, 100, -39, -84, -86, 31, -14, 14, 94, -98, 89, -80, -77, 10, -74, 99, 98, -49, 17, 87, 76, -33, -29, -38, -56, 65, 16, 38, -89, -89, 37, 31, 84, -44, -47, 63, 24, -51, 30, 98, 58, 80, 65, 27, -92, -24, -72, -47, 36, 68, 29, 70, 89, -58, 24, 34, -92, -46, 93, 12, 95, 92, -84, -10, 11, 19, 41, -20, -91, 27, -4, -70, 10, -48, 15, 98, -65, 96, -83, -30, -52, -5, 98, -14, -63, 74, -44, -80, -70, -17, -60, 3, 21, -7, -83, 100, 67, -20, 88, -21, 19, 52, -58, -7, 26, 2, -50, -26, -42, -93, 28, -6, -73, 30, 88, -25, 26, -34, -27, 39, 37, 80, -12, -100, 31, 76, 76, 15, -24, 81, -32, 19, 62, -66, -75, -29, -6, 60, -95, 93, -42, 88, 67, -14, 42, -87, 53, -98, 22, -40, -17, -32, -26, 11, 84, -76, -94, -50, -65, -8, 79, -93, 96, 60, -91, -32, -40, -94, -21, -41, 52, 62, -94, -88, 74, 93, -74, 56, 37, -17, 31, -2, 41, -38, 89, -43, -17, -25, 80, 53, 34, -56, 1, 6, -47, -41, -44, -22, -6, -9, 1, 56, 9, 74, 96, 11, 20, 57, 22, 70, -37, 19, 81, 28, -65, 5, 27, -8, 67, -57, -84, -26, -48, -74, -94, -3, -43, 25, 92, 21, -86, 51, 86, -51, -51, -72, 15, 54, -45, 7, 81, -61, 41, 74, -76, -89, -31, 18, -32, 33, 50, -73, 79, -93, 2, -44, -1, 48, -20, -78, 98, 87, 74, 43, 38, -12, 29, -58, 26, 90, -35, 47, 67, -59, -22, -81, -74, 32, 94, 35, 88, -64, -36, -76, -4, -43, -75, -73, -12, 48, -29, -53, -74, -84, 53, 44, -4, -57, -84, 11, 26, 0, -80, -29, -91, -51, -3, -6, -36, -48, 20, 71, 32, -24, -84, 90, 91, 54, 47, -13, -41, -10, 23, -75, -46, 78, -90, 81, 89, -3, 98, 94, -87, -50, 68, -32, -6, -25, -49, -78, 67, 57, 21, 43, -63, -30, 74, -5, 58, 54, -79, 41, -60, -79, -92, -9, 23, 19, -38, -1, -14, 58, 0, -18, -14, 24, 75, -25, 11, 46, 20, 53, 74, 36, 66, -34, -50, 27, 92, -52, -27, -36, -28, -68, -81, 53, -63, 37, 62, 43, 23, -75, 80, 39, -6, -64, -94, -47, -54, 63, 75, -32, 3, -58, -8, 91, 96, -39, 62, 33, -23, -82, 31, 9, -70, 38, -25, -35, -56, 53, -9, 79, -98, -48, -92, 5, 22, 78, -72, 86, 76, 47, 53, 39, -12, -48, -75, -9, 33, 2, 2, 64, 49, -2, 23, 65, 7, 1, -76, 99, 90, -92, 18, -93, 39, 65, -17, -68, -84, 68, -62, -100, -19, 16, -52, -45, -24, 71, -59, 83, 3, 28, 40, 61, 22, 83, -2, 13, -6, -45, 39, -61, 93, -93, -26, 57, 71, -63, 46, 51, -81, 80, 43, -45, 61, -88, 22, -87, 34, -23, -26, 26, -12, 70, 29, 14, -9, -51, 52, 60, 42, 0, -13, -1, -80, -76, -40, -99, -62, -70, 14, -62, 90, -99, 20, 18, 59, 28, 15, -48, -59, -98, -73, 55, 76, -84, -99, -76, -43, 48, -23, 43, 65, 57, 34, -45, 14, -63, -55, -96, -84, -30, 18, -11, 76, 50, -94, 8, 71, -2, -37, 88, -68, -49, 0, 89, 48, -84, -69, -23, -39, -58, -63, -97, 70, -48, -55, -27, -66, -43, -90, -27, 40, 37, -23, 11, -88, -80, 26, -25, -35, 89, 48, 73, -63, -100, 99, 78, 85, -64, -60, -32, 71, -82, -17, -8, -69, -71, 27, 80, -92, 48, 71, -87, -52, -84, 15, 61, 15, -66, -47, 5, 17, 20, 3, 23, -58, 85, 34, -88, 51, 73, -10, 76, 42, -19, 78, -21, 15, 56, 89, 76, -24, 8, 47, -32, -89, 97, 52, 50, 90, 18, -49, -93, -14, -70, -7, 76, 50, 39, 41, 15, 94, -100, 1, 2, 19, 45, -25, -56, -74, 41, -28, -69, 59, 11, 74, 46, 79, -71, 62, 15, -53, -64, -47, 20, -63, -32, 31, -75, 42, 15, -77, -83, -1, -44, -60, -33, 87, -39, 82, -10, -30, 8, -38, 82, -7, 27, 38, 53, -74, -56, 6, -78, 38, -45, 40, 15, -80, -13, 83, -74, -2, 43, -57, 26, -56, -21, 28, 25, -33, 54, -22, 61, 34, 4, -78, -78, 34, 95, 98, -10, 53, -54, 81, 31, -20, -28, 95, -32, -44, -18, 63, 22, -3, -41, -28, 44, 56, -11, 43, -47, 33, 30, -2, 62, -1, 76, -69, -18, 40, -84, -10, -65, -28, 66, 42, 11, 78, -89, 84, -56, -91, 90, 31, 47, 82, 31, -47, -5, -53, -10, -5, -95, -20, 43, -60, -66, 49, -39, -41, -45, -92, -68, -35, -41, -52, 84, -37, -15, 18, -44, 23, -55, 65, -25, 22, -46, -39, -44, -29, 32, 66, -47, -58, 58, 75, -3, -32, -45, -33, -5, 20, 79, 25, 5, -88, -80, -8, -69, 8, -38, 100, 33, -54, -32, 30, 49, 8, -72, 72, -31, 21, 1, -15, 85, 26, 23, 30, -46, 79, 2, 57, -71, 33, 22, -16, -30, 12, -22, -27, 58, 70, 13, 2, 72, 80, -58, -85, -83, 14, -70, -6, -45, -19, 20, 66, 94, -44, -58, -49, -86, -64, 24, -41, -84, -21, -85, 28, -42, -38, -81, 7, 32, 98, -29, 60, 79, -76, 92, -7, 3, 65, 78, -11, -60, 77, -90, 90, 28, 14, -58, -12, 44, 15, 93, 79, -16, 63, 27, -92, -63, -85, 81, -27, 1, 67, -55, 18, 82, -12, 39, 54, -31, -37, 71, -98, -4, 56, 89, -42, -77, 13, -99, 35, 18, -46, 47, -68, -31, -46, 9, 27, 58, 13, -93, 23, -15, 38, 50, 62, 8, -94, 35, 97, -20, -19, -86, -79, 49, 9, 27, 37, -70, 47, 29, -8, -87, -91, -88, 34, -32, 1, -66, -51, 89, 53, -92, 92, -34, 23, 69, 99, -33, 59, -60, 31, 59, -51, 17, -52, 96, -82, 81, 21, 11, 80, -45, -11, -53, -23, -25, 73, 61, 6, -82, -56, -81, -18, 79, -94, 77, -34, 12, 10, -80, -37, 37, -32, 52, 29, 45, -41, -38, -88, 10, 66, -45, 33, 85, 63, 28, -32, -42, 26, 73, 81, 86, -97, -5, -64, -40, 80, 8, -47, -52, -61, -95, -3, 91, -36, -85, 29, -51, 19, 78, -55, -32, 24, 92, 48, 28, 94, 35, 97, 71, 97, -19, -87, -27, 85, 66, 54, -96, 58, 83, -92, 91, 40, 33, -12, 89, 53, 90, 72, -32, 48, 69, 93, -86, 18, 7, -30, 85, -68, -31, -35, -88, 30, -44, 72, 49, -58, -62, -31, -63, -76, -77, 32, -10, 94, 82, -90, -32, -97, 32, -46, 75, -3, -48, 50, 22, 61, -16, -98, -16, 95, -47, 68, 58, -93, -68, 63, 5, -70, 43, -28, 62, -26, 14, -48, -97, -91, -36, -8, 83, -30, 84, 33, -67, 15, 40, -6, 51, -77, 60, -35];

timeIt(arr3000, Object.keys({arr3000})[0], 1026, getConsecutiveSumNaiveWay);
