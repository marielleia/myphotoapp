const express = require("express");
var img = express.Router();
var multipart = require("connect-multiparty");
var imageController = require("../controllers/image");

//middleware
var md_upload = multipart({ uploadDir: "../server/uploads/users" });

img.get("/all", imageController.testImage);
img.post("/upload-image-user/:id", [md_upload], imageController.uploadImages);
img.get("/viewer", imageController.viewImage);

module.exports = img;
