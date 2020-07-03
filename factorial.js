// factorial
// 1! = 1
// 2! = 2 * 1
// 3! = 3 * 2 * 1
// 4! = 4 * 3 * 2 * 1
// n! = n * (n - 1) * (n - 2) * ... * 1

const getFactorial = (n) => {
  // base
  if (n === 1 || n === 0) {
    return 1;
  }

  // recursive
  return n * getFactorial(n - 1);
};

module.exports = getFactorial;
