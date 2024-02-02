const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const sendPaymentRequestToApi = require('./4-payment.js');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments and log the message', () => {
    // 1. Stub the Utils.calculateNumber function
    const calculateNumberStub = sinon.stub(require('./utils.js'), 'calculateNumber');
    calculateNumberStub.returns(10); // Always return 10

    // 2. Spy on the console.log function
    const consoleLogSpy = sinon.spy(console, 'log');

    // 3. Call the function under test
    sendPaymentRequestToApi(100, 20);

    // 4. Assertions: Verify stub and spy behavior
    expect(calculateNumberStub.calledOnce).to.be.true;
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;
    expect(consoleLogSpy.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;

    // 5. Restore the stub and spy
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
