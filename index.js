require("dotenv").config();

const express = require("express");
const cors = require("cors");

const server = express();

server.use(express.json());

if (process.env.NODE_ENV === "development") {
  //on heroku machine an env variable is called
  //"NODE_ENV" and it is set to "production"
  const cors = require("cors");
  server.use(cors());
}

server.use("*", (req, res) => {
  res.send(`<h1>App is running!</h1>`);
});

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
