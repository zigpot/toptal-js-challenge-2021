box.monthToString = function monthToString(x) {
  // x is a number
  // return a string
  // (ex. x=1, you should return "Jan")
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return month[x - 1];
};