function divide(n, number) {
  let step = Math.floor(number / n);
  let result = [];
  for (i = 0; i < step; i++) {
    result.push([n * i + 1, n * (i + 1)]);
  }
  if (number % n > 0) {
    result.push([n * step + 1, number]);
  }

  return result;
}

module.exports = divide;
