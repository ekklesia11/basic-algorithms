const getFibonacci = require("./fibonacci-number");

console.log("NODE TEST RESULT");
console.group("START ========================================");

console.time("30th fibonacci number");
console.log(getFibonacci(30));
console.timeEnd("30th fibonacci number");

console.log("END ========================================");
console.groupEnd();
