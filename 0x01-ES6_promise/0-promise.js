async function getResponseFromAPI(response) {
    return new Promise((resolve, reject) => {
        resolve(response ? true : response);
    });
}
