const getResponseFromAPI = () => new Promise((resolve, reject) => {
    const success = true;    
    if (success) {
        resolve({status: 200, data: success});
    } else {
        reject(new Error('The fake API is not working currently'));
    }
});
export default getResponseFromAPI;
