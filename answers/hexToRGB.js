box.hexToRGB = function hexToRGB(x) {
  // x is a string
  // return an array
  // (ex. x="#FFFFFF", you should return [255, 255, 255])
  const rgb =[0,0,0]
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(x)
  rgb[0] = parseInt(result[1], 16)
  rgb[1] = parseInt(result[2], 16)
  rgb[2] = parseInt(result[3], 16)
  return rgb
};