box.isPrime = function isPrime(x) {
  // x is a number
  // return boolean
  // (ex. x=11, you should return true because 11 is a prime number)
    if (x <= 1) return false;
    if (x == 2) return true;
    if (x % 2 == 0) return false;

    var boundary = Math.floor(Math.sqrt(x));
          
    for (var i = 3; i <= boundary; i += 2)
        if (x % i == 0)
            return false;
    
    return true; 
  
};