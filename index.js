"use strict";

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/myPhotosApp", (err, res) => {
  if (err) {
    throw err;
  } else {
    console.log("La base de datos esta activa y conectada.");
  }
});

console.log("Hola classe");
