const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ mssg: "test" });
});

app.listen(4000, () => {
  console.log("listening on 4000");
});
