const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const sumResult = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${sumResult}`);
}

module.exports = { sendPaymentRequestToApi };

