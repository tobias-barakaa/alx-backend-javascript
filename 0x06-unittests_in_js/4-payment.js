// 4-payment.js

const { calculateNumber } = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
  return result;
}

module.exports = sendPaymentRequestToApi;
