express = require("express");

server = express();
server.use(express.json());

PORT = 5000;
server.listen(PORT, () => {
  console.log(`server is up! PORT ${PORT}`);
});

server.get("/", function (req, res) {
  //write a new function that processes their API
  //write a unit test that consumes your endpoint and validates that data is correct.
  //more important to unit test your own logic vs the API logic. The work you you do vs whta that API does.
  //ask what they prefer if they want me to write tests for their API function also.
  //pixabay

  res.send("api is up betchesssssssss");
});

server.get("/repeat/:word/:times", function (req, res) {
  var message = [];
  for (var i = 0; i < req.params.times; i++) {
    message.push(req.params.word);
  }

  res.send(message);
});
