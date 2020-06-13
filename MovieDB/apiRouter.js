const express = require("express");
router = express.Router();
axios = require("axios");

// const URL = "http://www.omdbapi.com/s?=california&apikey=thewdb";

const MOVIE_URL = "http://www.omdbapi.com/";

const API_KEY = "thewdb";

const MOVIE_PARAMS = {
  s: "bar",
  apikey: "thewdb",
};

const movieFunc = async (url, params) => {
  const movies = await axios.get(url, {
    params: params,
  });

  if (movies && movies.status == 200) {
    return movies.data;
  } else {
    return "error";
  }
};

router.get("/movies/:searchWord", async (req, res) => {
  const URL = MOVIE_URL;
  const PARAMS = { apikey: "thewdb", s: req.params.searchWord };

  try {
    const movies = await movieFunc(URL, PARAMS);

    if (movies && movies != "error") {
      res.status(200).send(movies);
    } else {
      res.status(404).send("there was an error retreaving data from the API");
    }
  } catch {
    res.status(500).send("error");
  }
});

module.exports = router;
