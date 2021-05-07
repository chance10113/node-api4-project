console.log("ITS WORKING");

require("dotenv").config();

const express = require("express");

const server = express();

const PORT = process.env.PORT || 5000;

server.use(express.json());

server.get("/api/dogs", (req, res) => {
  res.send(`<h2>LOOK! THERE ARE DOGS!</h2>
  <p>Bobbert
   <br><br>
  Captain
  <br><br>
  Doog
  <br><br>
  Loog
  <br><br>
  Goof
  <br><br>
  Foog <p>
  `);
});

server.use("*", (req, res) => {
  res.send(`
    <h2>Lambda Project</h2>
    <p>Welcome!</p>
  `);
});

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});
