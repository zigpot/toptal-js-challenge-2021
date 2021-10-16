box.reverseAllWords = function reverseAllWords(x) {
  // x is a string
  // return a string
  // (ex. x="Hello from Toptal", you should return "olleH morf latpoT")
  s = x.split(" ")
  for (var i = 0;  i < s.length; i++){
    //reverse string
    s[i] = s[i].split("").reverse().join("");
  }
  
  return s.join(" ")
};