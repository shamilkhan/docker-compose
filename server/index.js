const express = require("express");
const app = express();

app.get("*", (req, res) => {
  res.send("Server");
});

app.listen(3000);
