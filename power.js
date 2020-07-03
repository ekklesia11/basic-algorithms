// times table

const getPower = (x, nth) => {
  // base
  if (nth === 1) {
    return x;
  }

  // recursive
  return x * getPower(x, nth - 1);
};

module.exports = getPower;
