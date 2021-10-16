box.averageAsciiChar = function averageAsciiChar(x) {
  // x is a string
  // return a character
  // (ex. x="Hello World!", you should return "Z")
  var sum = 0
  for(var i = 0; i < x.length; i++){
    sum += x[i].charCodeAt()
  }
  return String.fromCharCode(Math.round(sum / x.length))
  
};