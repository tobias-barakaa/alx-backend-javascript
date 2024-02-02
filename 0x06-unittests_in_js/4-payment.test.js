// 4-payment.test.js

const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let calculateNumberStub;
  let consoleLogSpy;

  beforeEach(() => {
    // Stub Utils.calculateNumber to always return 10
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the stub and the spy after each test
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });

  it('should call Utils.calculateNumber with correct arguments and log the correct message', () => {
    // Call the function
    sendPaymentRequestToApi(100, 20);

    // Verify that the stub is being called with the correct arguments
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Verify that console.log is logging the correct message
    expect(consoleLogSpy.calledOnceWithExactly('The total is: 10')).to.be.true;
  });
});
