  box.numberRepresentation = function numberRepresentation(arr) {
    // arr is an array
    // return a number
    // (ex. arr=[b,a,a,a,c,b,a] you should return 421 where 4 represents 'a' occurences, 2 for 'b', etc..) 
    const uniqueNumber = [...new Set(arr)]
    uniqueNumber.sort()
    const dict ={};
    for (var i = 0; i < uniqueNumber.length; i++){
      dict[uniqueNumber[i]] = 0
    }
    for (var i = 0; i < arr.length; i++){
      dict[arr[i]] = dict[arr[i]] + 1
    }
    ret = 0
    for (const num in dict){
      ret = ret* 10 + dict[num] 
    }
    return ret
  };