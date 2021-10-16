box.isRotatedStr = function isRotatedStr(x, y) {
  // x and y are strings;
  // return boolean
  // (ex. x="vwxyz", y="xyzvw", you should return true because we when shifting v and w to the rightmost
  // it will match y)
  if (x.length == 0 && y.length == 0) return true
  for (var i = 0; i < x.length; i++){
    if (x === y){
      return true
    }
    x = x.slice(1, x.length) + x[0]
  }

  return false
  
};