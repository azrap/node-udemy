const express = require("express");
const server = express();

const request = require("request");
const axios = require("axios");

server.use(express.json());

server.get("/", function (req, res) {
  res.send("basic api up!");
});

URL = "http://www.omdbapi.com/?s=california&apikey=thewdb";

function moviesFunc(URL, callback) {
  request(URL, function (error, response, body) {
    // start with empty response body
    let response_body;
    if (!error && response.statusCode == 200) {
      response_body = JSON.parse(body);
    } else {
      response_body = JSON.parse(error);
    }
    callback(response_body);
  });
  //   return movies;
}

server.get("/movies", (req, res) => {
  const movieDataCallback = function (movieresponse) {
    res.send(movieresponse);
  };

  movies = moviesFunc(URL, movieDataCallback);
});

// server.get("/movies", (req, res) => {
//   request(URL, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       res.send(body);
//     } else {
//       res.send(error);
//     }
//   });
// });

// ==========================
PORT = 5000;
server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = server;
