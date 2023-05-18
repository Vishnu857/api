const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.json({ name: "bala", age: 20 });
});
app.listen(3000);
