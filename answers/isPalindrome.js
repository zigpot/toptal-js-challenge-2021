  box.isPalindrome = function isPalindrome(x) {
    // x is a string
    // return boolean
    // (ex. x="Pull up!", you should return true)
    return x.replace(/(\W|_)/g, '').toLowerCase().split("").reverse().join("") === x.replace(/\W|_/g, '').toLowerCase()
  };