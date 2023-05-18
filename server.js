const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.json({ name: "bala", age: 21 });
});
app.listen(3000);
