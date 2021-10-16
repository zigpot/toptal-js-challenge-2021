box.missingInteger = function missingInteger(x) {
  // Given an array of positive integers, determine the missing integer
  // (ex. arr = [1,4,3,2,6] it should return 5)
  // (ex. arr = [1,2,3] should return 4 as there are no missing integer in between)
  if (x.length == 0) return 1;
  x.sort()
  for (var i = 0; i < x.length - 1; i++) {
    if (x[i + 1] - x[i] > 1){
      return x[i] + 1
    }
  }
  return x[x.length - 1] + 1
};