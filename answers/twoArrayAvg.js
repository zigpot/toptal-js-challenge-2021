box.twoArrayAvg = function twoArrayAvg(x, y) {
  // x and y are arrays of numbers
  // return a number
  // (ex. x=[1,2,3],  y=[4,5,6], you should return 3.5)
  const average = (array) => array.reduce((a, b) => a + b) / array.length;
  avg1 = average(x)
  avg2 = average(y)

  return (avg1 + avg2) / 2;  
};