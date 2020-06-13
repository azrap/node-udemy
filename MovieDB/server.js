const express = require("express");
const server = express();

const request = require("request");
const axios = require("axios");

const apiRouter = require("./apiRouter");

server.use(express.json());
server.use("/api", apiRouter);

server.get("/", function (req, res) {
  res.send("basic api up!");
});

URL = "http://www.omdbapi.com/?s=california&apikey=thewdb";

async function movieFuncAwait() {
  try {
    const response = await axios.get(URL);
    return response.data;
  } catch {
    return "error";
  }
}

server.get("/movies", async (req, res) => {
  try {
    let data = await movieFuncAwait();
    res.send(data);
  } catch {
    res.send("error");
  }
});

// function moviesFunc(callback) {
//   request(URL, function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//       callback(body);
//     } else {
//       callback(error);
//     }
//   });
// }

// server.get("/movies", (req, res) => {

//   let moviesCallback = (body) => {
//     res.status(200).send(body);
//   };

//   try {
//     moviesFunc(moviesCallback);
//   } catch {
//     res.status(500).json({ error: "theres been an error" });
//   }
// });

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
