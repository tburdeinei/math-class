const assert = require('assert'); // https://nodejs.org/api/assert.html
const AdvancedMath = require('./advanced-math.js');

describe('AdvancedMath', function() {

  describe('add', function() {
    it('adds a set of numbers together', function() {
      const expected = 6;
      /*changed to reflect the requirement in line 36 of INSTRUCTIONS.txt
      that the AdvancedMath.add function returns 'sum of all its args'. I took
      'all' to mean it should take an array of addends instead of a few
      individual args. I have changed the test to reflect this interpretation
      of the functionality. I'd review the functional spec / ask stakeholders
      if this is correct or needed. I've also included the more obvious / easier
      solution below in the 'add' method.
      */
      const actual = AdvancedMath.addAlternate([1, 2, 3]);
      assert.equal(expected, actual);
    });
  });

  describe('pow', function() {
    it('raises numbers to powers', function() {
      const expected = 8;
      const actual = AdvancedMath.pow(2, 3);
      assert.equal(expected, actual);
    });
  });

  describe('isRightTriangle', function() {
    it('checks right triangles', function() {
      const expected = true;
      const actual = AdvancedMath.isRightTriangle(3, 4, 5);
      assert.equal(expected, actual);
    });
  });

  describe('methods inherited from BasicMath', function() {
    it('multiplies numbers', function() {
      const expected = 6;
      const actual = AdvancedMath.multiply(2, 3);
      assert.equal(expected, actual);
    });
  });

});
