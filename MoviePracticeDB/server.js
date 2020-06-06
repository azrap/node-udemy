express = require("express");
server = express();
axios = require("axios");

server.use(express.json());

PORT = 5000;
server.listen(PORT, () => {
  console.log(`api is up on port ${PORT}`);
});

server.get("/", (req, res) => {
  res.status(200).send("api is up!");
});

//write a movies API endpoint that takes in the search term from the endpoint, searches the movies database and returns a list of movies with that search term to the client

//2 Business logic: make a movies function that pings the movies api and fetches the results

const MOVIES_URL = "http://www.omdbapi.com/";

const SCORES_URL = "https://azramind.herokuapp.com/score";

const API_KEY = "thewdb";

const postScores = async (url, params) => {
  try {
    score = await axios.post(url, params);
    return score;
  } catch {
    ("error");
  }
};

async function validateInputs(req, res, next) {
  if (req.body.user_id && req.body.difficulty && req.body.num_tries) {
    next();
  } else {
    res.status(404).json({ errorMessage: "missing inputs" });
  }
}

server.post("/score", validateInputs, async (req, res) => {
  //   PARAMS = {
  //     user_id: 1,
  //     difficulty: 7,
  //     num_tries: 9,
  //   };
  PARAMS = {
    user_id: req.body.user_id,
    difficulty: req.body.difficulty,
    num_tries: req.body.num_tries,
  };

  const score = await postScores(SCORES_URL, PARAMS);

  try {
    res.status(200).send(score.data);
  } catch {
    res.status(500).send("an error has occured");
  }
});

const getMovies = async (url, params) => {
  try {
    const movies = await axios.get(url, {
      params: params,
    });
    return movies.data;
  } catch {
    return "error";
  }
};

//1 make an end point that returns text as a framework
server.get("/movies/:searchTerm", async (req, res) => {
  const URL = MOVIES_URL;
  const PARAMS = {
    s: req.params.searchTerm,
    apikey: "thewdb",
  };
  try {
    const movies = await getMovies(URL, PARAMS);

    if (movies["Search"]) {
      res.status(200).send(movies);
    } else {
      res.status(404).json({ error: "movies not found" });
    }
  } catch {
    res.status(500).send("an error has occured");
  }
});

//take the first item from the search terms and put "my favorite movie is: "
server.post("/movies/fave", async (req, res) => {
  const URL = MOVIES_URL;
  const PARAMS = {
    s: req.body.search,
    apikey: "thewdb",
  };
  try {
    const movies = await moviesFunc(URL, PARAMS);

    const fave = movies["Search"][5];

    res.status(200).send(fave);
  } catch {
    res.status(500).send("an error has occured");
  }
});

//3 have the end point call the movies function and return the results

module.exports = server;
