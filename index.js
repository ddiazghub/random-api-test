const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

/**
 * Index Route
 */
app.get("/", (req, res) => {
  res.status(200).send("Hello World!!!");
});

app.listen(PORT, () => console.log("Server started on port:", PORT));
