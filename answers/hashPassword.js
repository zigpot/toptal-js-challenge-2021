    box.hashPassword = function hashPassword(password, x) {
    // password is a string, x is a number
    // return a string
    // (ex. password = 'ab1By', x = 3 so you should return "DE4eB")
    ret = ""
    pass_ = password.split("")
    for (var i  = 0 ; i < pass_.length; i++){
      if(pass_[i] <= '9' &&  pass_[i] >= '0') ret = ret +(String.fromCharCode(48 + (pass_[i].charCodeAt() - 48 + x) % 10))
      if(pass_[i] <= 'Z' &&  pass_[i] >= 'A') ret = ret +(String.fromCharCode(97 + (pass_[i].charCodeAt() - 65 + x) % 26))
      if(pass_[i] <= 'z' &&  pass_[i] >= 'a') ret = ret +(String.fromCharCode(65 + (pass_[i].charCodeAt() - 97 + x) % 26))
      console.log(i)
    }
    return ret
  };
