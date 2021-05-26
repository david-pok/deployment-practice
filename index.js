require("dotenv").config();

const path = require("path");
const express = require("express");
const cors = require("cors");

const server = express();

server.use(express.json());

//this will use path to load our static assets
//at the destination
server.use(express.static(path.join(__dirname, "client/build")));

if (process.env.NODE_ENV === "development") {
  //on heroku machine an env variable is called
  //"NODE_ENV" and it is set to "production"
  const cors = require("cors");
  server.use(cors());
}

server.get("/api/hello", (req, res) => {
  res.json({ message: "hello" });
});

//make sure to run npm run build in client directory first
//this catch all will just send back index.html
//if an endpoint that doesn't exist is hit
server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
