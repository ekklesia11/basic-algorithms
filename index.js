const getFibonacci = require("./fibonacci-number");
const getPower = require("./power");
const sumTo = require("./sumTo");

console.log("NODE TEST RESULT");
console.group("START ========================================");

console.time("30th fibonacci number");
console.log(getFibonacci(30));
console.timeEnd("30th fibonacci number");
console.log("");
console.time("power");
console.log(getPower(2, 32));
console.timeEnd("power");
console.log("");
console.time("sumTo");
console.log(sumTo(10));
console.timeEnd("sumTo");
console.log("");

console.groupEnd();
console.log("END ==========================================");
