const express = require("express");
const server = express();

const request = require("request");
const axios = require("axios");

server.use(express.json());

URL = "http://www.omdbapi.com/?s=california&apikey=thewdb";

async function getMovies() {
  try {
    return await axios.get(
      "http://www.omdbapi.com/?s=california&apikey=thewdb"
    );
  } catch (error) {
    console.error(error);
  }
}

server.get("/movies", async function (req, res, getMovies) {
  try {
    let movies = await getMovies();

    res.status(200).send("movies");
  } catch {
    res.status(500).send("error");
  }
});

// ==========================
server.get("/", function (req, res) {
  res.send("basic api up!");
});
PORT = 5000;
server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = server;
