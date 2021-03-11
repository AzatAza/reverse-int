module.exports = function reverse (n) {
    if (n < 0 ) n=-(n);
    var b = 0;
    var sum = 0;
    while(n > 0) {
      b = n % 10; 
      sum = sum * 10 + b; 
      n = parseInt(n / 10);}
    return sum;
}
