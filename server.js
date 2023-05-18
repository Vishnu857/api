const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.json({ name: "bala", age: 21 });
});
app.listen(3000);
