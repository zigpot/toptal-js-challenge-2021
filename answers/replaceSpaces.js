box.replaceSpaces = function replaceSpaces(x) {
  // x is a string
  // return a string
  // (ex. x="hello world", you should return "hello%20world")
  return x.replace(/\s+/g, '%20')
};