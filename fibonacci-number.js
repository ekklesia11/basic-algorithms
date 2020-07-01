// fibonacci numbers
// 0 1 1 2 3 5 8 13 21 34 55 ...

const getFibonacci = (nth) => {
  if (nth === 0 || nth === 1) return 0;
  if (nth === 2) return 1;

  let res = getFibonacci(nth - 2) + getFibonacci(nth - 1);
  return res;
};

module.exports = getFibonacci;
