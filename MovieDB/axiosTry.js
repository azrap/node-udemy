const axios = require("axios");

URL = "http://www.omdbapi.com/?s=california&apikey=thewdb";

async function asyncFunc() {
  try {
    // fetch data from a url endpoint
    const response = await axios.get(URL);
    const data = await response;

    return data;
  } catch (error) {
    console.log(error); // catches both errors
  }
}

const response = asyncFunc();

console.log(response);
