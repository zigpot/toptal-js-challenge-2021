box.digitOccurrence = function digitOccurrence(n, x) {
  // n is an integer, x is a single-digit number
  // return a number
  // (ex. n=11, x=1, it should return 4 because ‘1’ appears up 4 times between 0 and 11)
  var count = 0
  for (var i = 0; i <= n; i++){
    var num = i
    if (i == 0 && x == i) count++
    while (num > 0) {
      if ((num % 10) == x ) count++
      num = (num / 10) >> 0;
    }
  }
  return count
  
};