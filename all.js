const miniMaxSum = arr => {
  const decendingArray = arr.sort((a, b) => a - b);
  const sum = decendingArray.reduce((sum, e) => sum + e, 0);
  const min = sum - decendingArray[decendingArray.length - 1];
  const max = sum - decendingArray[0];
  return [min, max];
};

const diagonalDifference = arr => {
  let diag1 = 0;
  let diag2 = 0;
  const len = arr.length;
  arr.forEach((ele, ind) => {
    diag1 += ele[ind];
    diag2 += ele[len - 1 - ind];
  });
  return Math.abs(diag1 - diag2);
};

const compareTriplets = (a, b) => {
  const aCount = a.reduce((acc, e, i) => acc + (e > b[i]), 0);
  const bCount = b.reduce((acc, e, i) => acc + (e > a[i]), 0);
  return [aCount, bCount];
};

const sortedSquares = A => A.map(e => e * e).sort((a, b) => a - b);

const fib = N => {
  const memo = {};
  return fibRec(N, memo);
};

const fibRec = (N, memo) => {
  if (memo[N]) return memo[N];
  else {
    if (N < 2) return N;
    else {
      memo[N] = fibRec(N - 1, memo) + fibRec(N - 2, memo);
      return memo[N];
    }
  }
};

const isNumber = s =>
  s !== " " ? (typeof (s | 0) === "number" ? !isNaN(+s) : false) : false;

const selfDividingNumbers = (left, right) => {
  var dividingNumber = [];
  for (let i = left; i <= right; i++) {
    const denominators = ("" + i).split("");
    const allDivisible = denominators.filter(d => d != 0 && i % d == 0);
    if (denominators.length == allDivisible.length) dividingNumber.push(i);
  }

  return dividingNumber;
};
