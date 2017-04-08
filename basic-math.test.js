const assert = require('assert'); // https://nodejs.org/api/assert.html
const BasicMath = require('./basic-math.js');

describe('BasicMath', function() {

  describe('add', function() {
    it('adds two numbers', function() {
      const expected = 3;
      const actual = BasicMath.add(1, 2);
      assert.equal(expected, actual);
    });
  });

  describe('subtract', function() {
    it('subtracts two numbers', function() {
      const expected = 2;
      const actual = BasicMath.subtract(6, 4);
      assert.equal(expected, actual);
    });
  });

  describe('multiply', function() {
    it('multiplies numbers', function() {
      const expected = 6;
      const actual = BasicMath.multiply(2, 3);
      assert.equal(expected, actual);
    });
  });

  describe('divide', function() {
    it('divides two numbers', function() {
      const expected = 2;
      const actual = BasicMath.divide(6, 3);
      assert.equal(expected, actual);
    });
  });

});
