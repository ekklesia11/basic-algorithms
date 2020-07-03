const getFibonacci = require("./fibonacci-number");
const getPower = require("./power");
const sumTo = require("./sumTo");
const getFactorial = require("./factorial");

console.log("NODE TEST RESULT");
console.group("START ========================================");

console.time("getFibonacci");
console.log(getFibonacci(30));
console.timeEnd("getFibonacci");
console.log("");
console.time("getPower");
console.log(getPower(2, 32));
console.timeEnd("getPower");
console.log("");
console.time("sumTo");
console.log(sumTo(10));
console.timeEnd("sumTo");
console.log("");
console.time("getFactorial");
console.log(getFactorial(12));
console.timeEnd("getFactorial");
console.groupEnd();
console.log("END ==========================================");
