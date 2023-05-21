const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.json([
    { name: "joker", age: 30 },
    { name: "ironman", age: 30 },
    { name: "watchman", age: 30 },
    { name: "superman", age: 30 },
    { name: "spider man", age: 29 },
  ]);
});
app.listen(3000);
