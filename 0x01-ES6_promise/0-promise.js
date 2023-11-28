export default function getResponseFromAPI() {
    const url = "https://api.example.com/endpoint";
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const request = new Request(url, options);
  
    return fetch(request)
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
        throw error;
      });
}
