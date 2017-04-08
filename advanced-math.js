const BasicMath = require('./basic-math.js');

// Implement AdvancedMath here.

var AdvancedMath = Object.assign({}, BasicMath);

// Returns the sum of all integers in the array its passed

AdvancedMath.add = function(array) {
  return array.reduce(function(a, b) { return a + b; }, 0);
    /* note: this is more elegant than a for loop, but wouldn't work in IE8, so I'd do
    it this way and ask my stakeholders what our support target is, then change
    it if necessary.*/
}

// Returns the power of a base and its exponent

AdvancedMath.pow = function(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return this.multiply(base,this.pow(base, exponent - 1));
  }
}

// returns the absolute value of a number

AdvancedMath.abs = function(x) {
  x = +x;
  return (x > 0) ? x : 0 - x;
}

// returns the square root (herons guess method)

AdvancedMath.sqrt = function(num){
  var oldGuess;
  var guess = this.divide(num,3);
  do {
    oldGuess = guess;
    guess = this.divide(this.divide(num,guess) + guess,2);
  }
  while(this.abs(oldGuess - guess) > 5e-15);
  return guess;
}

// Determines if a given set of a, b, and c describe a right triangle using the
// pythagorean theorem

AdvancedMath.isRightTriangle = function(a, b, c) {
    if(this.sqrt( this.multiply(a,a) +  this.multiply(b,b)) === c) {
      return true;
    } else {
      return false;
    }
}

module.exports = AdvancedMath;

//other notes: Depending on where the values used here are coming from, I might
//check them for int or array and try and translate them into the correct data
//type if needed
