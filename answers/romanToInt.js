box.romanToInt = function romanToInt(x) {
  // x is a string; roman numeral
  // return a number
  // (ex. x="IV", you should return 4)
  const roman = {'I':1,'V':5,'X':10,'L':50,'C':100,'D':500,'M':1000}
  let ans = 0
  for (let i = x.length-1; ~i; i--) {
      let num = roman[x.charAt(i)]
      if (4 * num < ans) ans -= num
      else ans += num
  }
  return ans
};