box.findAverage = function findAverage(x) {
  // x is an array of numbers
  // return a number
  // (ex. x=[1,2,3,4] then you should return 3 because the average is 2.5)
  sum = x.reduce((a, b) => a + b, 0);
  sum = x.reduce((a, b) => a + b, 0);
  return Math.ceil((sum / x.length) || 0);
};