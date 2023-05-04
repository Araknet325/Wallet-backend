const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hola Esta es mi primer app wallet");
});

app.listen(port, () => {
  console.log(`Example app Listening on port ${port}`);
});
