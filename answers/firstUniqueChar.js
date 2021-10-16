box.firstUniqueChar = function firstUniqueChar(x) {
    // x is a string
    // return a string
    // (ex. x="toptal", you should return "o" because "t" appeared twice)

    var x_ = x.split("")
    const char = [...new Set(x_)]

    const dict ={};
    for (var i = 0; i < char.length; i++){
      dict[char[i]] = 0
    }
    for (var i = 0; i < x.length; i++){
      dict[x[i]] = dict[x[i]] + 1
    }
    for (const num in dict){
      if (dict[num] == 1) return num
    }
  return false
  };