const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const { sendPaymentRequestToApi } = require('./4-payment');

describe('sendPaymentRequestToApi', function () {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(function () {
    // Stub the calculateNumber function to always return 10
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    // Restore the stub and the spy
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber with correct arguments and log the result', function () {
    sendPaymentRequestToApi(100, 20);

    // Verify the stub was called with the correct arguments
    expect(calculateNumberStub.calledWithExactly('SUM', 100, 20)).to.be.true;

    // Verify the console.log message contains the expected result
    expect(consoleLogSpy.calledWithExactly('The total is: 10')).to.be.true;
  });
});
