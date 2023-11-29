const getFullResponseFromAPI = () => new Promise((resolve, reject) => {
    const success = true;
    success ? resolve({status: 200, body: 'Success'}) : reject(new Error('The fake API is not working currently'));
    
});
export default getFullResponseFromAPI;
