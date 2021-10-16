box.findUniqueNumber = function findUniqueNumber(x) {
    // x is a array of numbers
    // return a number
    // (ex. x=[1,1,2,4,2,4,3] you should return 3)
    const uniqueNumber = [...new Set(x)]
    const dict ={};
    for (var i = 0; i < uniqueNumber.length; i++){
      dict[uniqueNumber[i]] = 0
    }
    for (var i = 0; i < x.length; i++){
      dict[x[i]] = dict[x[i]] + 1
    }
    for (const num in dict){
      if (dict[num] == 1) return parseInt(num)
    }
  };
