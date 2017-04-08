// Implement BasicMath here.
const BasicMath = {};
// Returns the sum of a and b
BasicMath.add = function(a,b){
  return a+b;
}
// Returns the difference of b from a
BasicMath.subtract = function(a,b){
  return a-b;
}
// Returns the product of a and b
BasicMath.multiply = function(a,b){
  if (a == 0 || b == 0) {
      return 0;
  }
  if (b < 0) {
      return this.multiply(-a, -b);
  }
  if (b == 1) {
      return a;
  }
  return a + this.multiply(a, b - 1);
}
// Returns the quotient of dividend a from divisor b
BasicMath.divide = function(a,b){
  var sign = (this.multiply(a,b) < 0)? -1 : 1;
    var quo = 0;
    while( (a -= b) >= 0 )
        quo++;
    return this.multiply(sign,quo);
}
module.exports = BasicMath;
