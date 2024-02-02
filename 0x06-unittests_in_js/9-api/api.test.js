const request = require('request');
const chai = require('chai');
const expect = chai.expect;

describe('Index page', () => {
  // ... existing tests for the index page
});

describe('Cart page', () => {
  it('should return a 200 status code when id is a number', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return a 404 status code when id is not a number', (done) => {
    request('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });
});
