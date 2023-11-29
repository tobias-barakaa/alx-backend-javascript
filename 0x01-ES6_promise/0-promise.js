const getResponseFromAPI = () => new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve(true);
  } else {
    reject(new Error('Operation failed'));
  }
});
export default getResponseFromAPI;
