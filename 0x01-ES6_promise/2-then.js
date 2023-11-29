function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch((error) => {
      console.log(error);
      return new Error();
    });
}
export default handleResponseFromAPI;
