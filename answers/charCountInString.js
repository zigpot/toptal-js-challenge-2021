box.charCountInString = function charCountInString(x, y) {
  // x is a string of 1 character
  // y is a string
  // return a number
  // (ex. x='$', y="$he$llo$$$wo$rld", should return 6),
  var count = 0
  for (var i = 0; i < y.length; i++){
    if (x === y[i]) count++
  }
  return count
};