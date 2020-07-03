const getFibonacci = require("./fibonacci-number");
const getPower = require("./power");

console.log("NODE TEST RESULT");
console.group("START ========================================");

console.time("30th fibonacci number");
console.log(getFibonacci(30));
console.timeEnd("30th fibonacci number");
console.time("power");
console.log(getPower(2, 32));
console.timeEnd("power");

console.groupEnd();
console.log("END ==========================================");
