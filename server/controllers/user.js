var User = require("../models/user");

function test(req, res) {
  res.status(200).send({
    message: "Testing controller",
  });
}

function saveUser(req, res) {
  var user = new User();
  var params = req.body;

  user.name = params.name;
  user.surname = params.surname;
  user.email = params.email;
  user.password = params.password;

  if (
    user.name != null &&
    user.surname != null &&
    user.email != null &&
    user.password != null
  ) {
    user.save((err, userStored) => {
      if (err) {
        res.status(403).send({ message: "Error saving user" });
      } else {
        if (!userStored) {
          res.status(500).send("User hasn't been saved.");
        } else {
          res.status(200).send({ user: userStored });
        }
      }
    });
  }
}

module.exports = {
  test,
  saveUser,
};
