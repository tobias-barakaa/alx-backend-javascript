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

  // Add more tests as needed, for example:
  // - Testing for specific headers
  // - Testing error handling for invalid rout
});
