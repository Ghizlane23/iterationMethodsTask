//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];

/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
Q1) Create a new array containing numbers that are greater than or equal to 25.

Q2) Create a new array containing numbers that are divisible by 5.
******************************************************************/
//Q1
const newArr = (arr) => {
  const arr1 = arr.filter((x) => x >= 25);
  return arr1;
};

console.log(newArr(numbers));

//Q2
const divArr = (arr) => {
  const newDivArr = arr.filter((x) => x % 5 === 0);
  return newDivArr;
};
console.log(divArr(numbers));

/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

Q3) Create a new array that contains each number squared.
Q4) Create a new array that contains each number multiplied by 2.
******************************************************************/
// Q3)
const sqrArr = (arr) => {
  const NewSqrArr = arr.map((x) => x * x);
  return NewSqrArr;
};
console.log(sqrArr(numbers));

//Q4
const mltArr = (arr) => {
  const NewMltArr = arr.map((x) => x * 2);
  return NewMltArr;
};
console.log(mltArr(numbers));
/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

Q5) Filter the numbers that are greater than or equal to 20 and then square each of them.
Q6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/
//Q5)
const grtSqr = (arr) => {
  const NwArr = arr.filter((x) => x >= 20).map((y) => y * y);
  return NwArr;
};
console.log(grtSqr(numbers));

//Q6)
const divMlt = (arr) => {
  const newR = arr.filter((x) => x % 5 === 0).map((y) => y * 3);
  return newR;
};
console.log(divMlt(numbers));
/*****************************************************************
Part 4: Extra not required 🌶️🌶️🌶️
******************************************************************/
/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
const logger = (array) => {
  array.forEach((e) => {
    console.log(e);
  });
};
logger(numbers);
/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
const toCelsius = (temperatures) => {
  const cels = temperatures.map((x) => (x - 32) * (5 / 9));
  return cels;
};
console.log(toCelsius(numbers));

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
const hottestDays = function (temperatures, threshhold) {
  const exTemp = temperatures.filter((x) => x > threshhold);
  return exTemp;
};
console.log(hottestDays(numbers, 5));

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
const logHottestDays = (temperatures, threshhold) => {
  const ExcedTem = hottestDays(temperatures, threshhold);

  const degCel = toCelsius(ExcedTem);
  console.log("Temperatures that exceed threshhold in  celsius");
  logger(degCel);
};

logHottestDays(numbers, 25);
