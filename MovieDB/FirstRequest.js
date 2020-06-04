const axios = require("axios");

const request = require("request");
//  request("http://www.google.com", function (error, response, body) {
//   console.error("error:", error); // Print the error if one occurred
//   console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
//   console.log("body:", body); // Print the HTML for the Google homepage.
// });

request("http://www.google.comd", function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log("hiiiii"); // Print the HTML for the Google homepage.
    console.log(response.statusCode);
  } else {
    console.log(error);
  }
});

// http://www.omdbapi.com/?s=guardians+of+the+galaxy&apikey=thewdb

//http://www.omdbapi.com/?i=tt3896198&apikey=thewdb

// make
