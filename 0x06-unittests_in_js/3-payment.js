const calculateNumber = require('./utils/calculateNumber')

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const res = calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${res}`);
}

module.exports = sendPaymentRequestToApi;