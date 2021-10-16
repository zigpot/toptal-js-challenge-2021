box.arrayToObject = function arrayToObject(x) {
  // x is an array
  // return an object
  // (ex. x=[["key", "value"], ["numb", 123], ["bool", true]], you should return {"key": "value", "bool": true, "numb": 123})
  return Object.fromEntries(x.map(([k, v]) => [k, v]))

};
