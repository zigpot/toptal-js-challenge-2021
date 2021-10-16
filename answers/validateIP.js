  box.validateIP = function validateIP(x) {
    // x is a string in the format of "X.X.X.X"
    // return boolean
    // (ex. x="127.0.0.1", you should return true)
    // (ex. x="555.123.123.1". you should return false because first part is greater than 255)

    var nums = x.split(".")
    if (nums.length > 4 || nums.length < 4) return false
    for (var i = 0; i < nums.length; i++){
      if (/^\d+$/.test(nums[i])) {return false}
      if (nums[i].length == 0) {return false}
      if (parseInt(nums[i]) > 255 || parseInt(nums[i]) < 0) return false
    }
    
    return true  
  };
