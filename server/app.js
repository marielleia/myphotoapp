const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/get", (req, res) => {
  res.send("Hello, This is Marielle!👋");
});

app.post("/post", (req, res) => {
  res.send("Hello, I am a POST request");
});

app.put("/put", (req, res) => {
  res.send("Hello, I am a PUT request");
});

app.delete("/delete", (req, res) => {
  res.send("Hello, I am a DELETE request");
});

module.exports = app;