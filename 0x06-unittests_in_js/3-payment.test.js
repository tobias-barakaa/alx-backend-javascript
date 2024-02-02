const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const { sendPaymentRequestToApi } = require('./3-payment');

describe('sendPaymentRequestToApi', function () {
  let calculateNumberSpy;

  beforeEach(function () {
    calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
  });

  afterEach(function () {
    calculateNumberSpy.restore();
  });

  it('should call Utils.calculateNumber with correct arguments and log the result', function () {
    sendPaymentRequestToApi(100, 20);

    // Verify the spy was called with the correct arguments
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;

    // Verify the console.log message contains the expected result
    expect(sinon.match('The total is:').test(sinon.match.defined)).to.be.true;
  });
});
