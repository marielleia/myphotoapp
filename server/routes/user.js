const express = require("express");
var api = express.Router();
var userController = require("../controllers/user")

api.get("/all", userController.test);

api.post("/register", userController.saveUser);

module.exports = api;