const express = require("express");
const crypto = require("node:crypto");

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

/**
 * Index Route
 */
app.get("/", (req, res) => {
  res.status(200).send("Hello World!!!");
});

app.get("/random", (req, res) => {
  res.status(200).send(Math.random());
});

app.get("/random/int", (req, res) => {
  res.status(200).send(crypto.randomInt(10000));
});

app.listen(PORT, () => console.log("Server started on port:", PORT));
