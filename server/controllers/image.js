var Image = require("../models/image");

function testImage(req, res) {
  res.status(200).send({
    message: "Testing image controller",
  });
}

function uploadImages(req, res) {
  var image = new Image();
  var userId = req.params.id;
  var file_name = "Uploading image...";

  //validation
  if (req.files) {
    var file_path = req.files.image.path;
    var parts = file_path.split("\\");
    file_name = parts[2];
    image.file = file_name;
    image.user = userId;

    //extension
    var ext_split = file_name.split("\."); //Ex. pepito.jpg {'pepito','jpg'}
    var file_ext = ext_split[1];

    if (file_ext == "png" || file_ext == "jpg" || file_ext == "gif") {
      image.save((err, imageStored) => {
        if (err) {
          res.status(500).send({ message: "Error saving image" });
        } else {
          if (!imageStored) {
            res.status(404).send({ message: "Couldn't save image" });
          } else {
            res.status(200).send({ image: imageStored });
          }
        }
      });
    }
  } else {
    res.status(404).send({ message: "Couldn't find any image" });
  }
}

function viewImage(req, res) {
  var idUser = req.params.id;
  Image.find({ user: idUser }, (err, imgUser) => {
    console.log(imgUser);
    if (err) {
      res.status(500).send({ message: "Error request" });
    } else {
      if (!imgUser) {
        res.status(404).send({ message: "No images found from this user" });
      } else {
        res.status(200).send({ images: imgUser.images });
      }
    }
  });
}

module.exports = {
  testImage,
  uploadImages,
  viewImage,
};
