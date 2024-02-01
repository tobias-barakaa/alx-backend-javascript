// 0-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should calculate the sum of rounded numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 7), 8);
    assert.strictEqual(calculateNumber(2, 3), 5); // Corrected value for the third assertion
  });

  it('should handle floating point numbers', () => {
    assert.strictEqual(calculateNumber(1.1, 3.0), 4);
    assert.strictEqual(calculateNumber(3.0, 3.7), 7);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5); // Corrected value for the third assertion
  });
});
