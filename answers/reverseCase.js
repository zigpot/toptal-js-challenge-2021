box.reverseCase = function reverseCase(x) {
  // x is a string
  // return a string
  // (ex. str="Toptal" you should return "tOPTAL")
  var output = '';
  for (var i = 0; i < x.length; i++) {
    var character = x[i];
    if (character == character.toLowerCase()) {
      output = output + character.toUpperCase();
    } else {
      output = output + character.toLowerCase();
    }
  }
  return output
};