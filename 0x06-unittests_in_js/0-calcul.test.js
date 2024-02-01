// 0-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('should calculate the sum of rounded numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
     
  });

  it('should handle floating point numbers', () => {
    assert.strictEqual(calculateNumber(1.1, 3.0), 4);
    
  });
  it('Edge Cases:', () => {
    assert.strictEqual(calculateNumber(0, 5), 5);

  });
  it('Large Numbers', () => {
    assert.strictEqual(calculateNumber(999999999, 1000000001), 2000000000);
  });
  it('Order Independence:', () => {
    assert.strictEqual(calculateNumber(1, 2), 3);
  });
  it('Equality of Rounded Numbers', () => {
    assert.strictEqual(calculateNumber(3.3, 3.7), 7);
  });
  
  it(' Infinity and NaN', () => {
    assert.strictEqual(calculateNumber(Infinity, 5), Infinity);

  })
});
