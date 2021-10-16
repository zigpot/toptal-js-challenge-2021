box.countUniqueNumbers = function countUniqueNumbers(x) {
  // x is an array of numbers
  // return a number
  // (ex. x=[1,2,2,2,3,4,20,3] you should return 5 as we have 1,2,3,4,20)
  const uniqueNumber = [...new Set(x)]
  return uniqueNumber.length
};
