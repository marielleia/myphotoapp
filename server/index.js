"use strict";
var mongoose = require("mongoose");
const app = require("./app");
const port = 3000;

mongoose.connect("mongodb://localhost:27017/myPhotosApp", (err, res) => {
  if (err) {
    throw err;
  } else {
    console.log("✅ Database connected and activated.");
    app.listen(port, () => {
      console.log(`🚀 Server running at port ${port}`);
    });
  }
});
