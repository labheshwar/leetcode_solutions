var myPow = function (x, n) {
  if (n === 0) return 1;
  let pow = Math.abs(n);
  let result =
    pow % 2 === 0 ? myPow(x * x, pow / 2) : myPow(x * x, (pow - 1) / 2) * x;
  return n < 0 ? 1 / result : result;
};

console.log(myPow(2.0, 10));
console.log(myPow(2.1, 3));
