// sum numbers up to the given number

const sumTo = (n) => {
  // base
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  // recursive
  return sumTo(n - 1) + n;
};

module.exports = sumTo;
