const express = require("express");
var user_routes = require("./routes/user");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api", user_routes);

module.exports = app;