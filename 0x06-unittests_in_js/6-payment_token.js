function getPaymentTokenFromAPI(success) {
    return new Promise((resolve, reject) => {
      if (success) {
        resolve({ data: 'Successful response from the API' });
      } else {
        // Handle the failure case (optional)
      }
    });
  }
  
  module.exports = getPaymentTokenFromAPI;
  