const request = require('request');
const expect = require('chai').expect;

describe('Index page', () => {
  it('should return a 200 status code', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct message', (done) => {
    request('http://localhost:7865', (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  describe('Cart page', () => {
    it('should return a 200 status code when :id is a number', (done) => {
      request('http://localhost:7865/cart/12', (error, response, body) => {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });
  
    it('should return a 404 status code when :id is not a number', (done) => {
      request('http://localhost:7865/cart/hello', (error, response, body) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  
    
  });
});
