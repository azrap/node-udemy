let express = require("express");
let axios = require("axios");

var twilio = require("twilio");

let server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).send({ message: "api is up!" });
});

PORT = 5000;
server.listen(PORT, () => {
  console.log(`the api is up on port ${PORT}`);
});

NASA_URL = "https://api.nasa.gov/planetary/apod";

const getPhoto = async (url) => {
  try {
    response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
};

// GET PHOTO OF THE DAY
server.get("/apod/", async (req, res) => {
  try {
    photo = await getPhoto(NASA_URL);

    res.status(200).json({ nasa_photo: photo });
  } catch {
    res.status(500).send("error");
  }
});

// Your Auth Token from www.twilio.com/console

var twilio = require("twilio");
var client = new twilio(accountSid, authToken);

//POST end point that
server.get("/apod/:phoneNum", async (req, res) => {
  try {
    photo = await getPhoto(NASA_URL);
    if (!photo) {
      res.status(404).json({ errorMessage: "photo not found" });
    } else {
      const sid = await client.messages
        .create({
          body: `click here for Nasa photo of the day ${photo.url}`,
          to: req.params.phoneNum, // Text this number
          from: "twilio number", // From a valid Twilio number
        })
        .then((message) => {
          console.log(message.sid);
          return message.sid;
        });

      if (sid) {
        res.status(200).send("photo was sent!");
      } else {
        res.status(400).send("photo didnt get sent");
      }
    }
  } catch {
    res.status(500).send("error something went wrong");
  }
});

module.exports = server;
