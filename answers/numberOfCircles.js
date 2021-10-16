box.numberOfCircles = function numberOfCircles(x) {
  // x is a number
  // return a number
  // (ex. x=1908, you should return 4)
  // (ex. x=9 you should return 1)
  x = Math.abs(x)
  const circlesInNums = [1, 0, 0, 0, 0, 0, 1, 0, 2, 1]
  var circles = 0;
  while (x > 0) {
    circles += circlesInNums[x % 10]
    x = (x / 10) >> 0;
  }
  return circles;
};