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

function seeUser(req, res) {
  var params = req.body;
  var email = params.email;

  User.findOne({ email: email.toLowerCase() }, (err, user) => {
    if (err) {
      res.status(500).send({ message: "Request failed" });
    } else {
      if (!user) {
        res.status(404).send({ message: "Incorrect credentials" });
      } else {
        res.status(200).send({ user });
      }
    }
  });
}

function seeAllUsers(req, res) {
  User.find((err, user) => {
    if (err) {
      res.status(500).send({ message: "Request failed" });
    } else {
      if (!user) {
        res.status(404).send({ message: "Incorrect credentials" });
      } else {
        res.status(200).send({ user });
      }
    }
  });
}

function updateUser(req, res) {
  var userId = req.params.id;
  var update = req.body;

  User.findByIdAndUpdate(userId, update, (err, updatedUser) => {
    if (err) {
      res.status(500).send({ message: "Error updating user" });
    } else {
      if (!updatedUser) {
        res.status(404).send({ message: "Couldn't update user" });
      } else {
        res.status(200).send({ user: updatedUser });
      }
    }
  });
}

function deleteUser(req, res) {
  var userId = req.params.id;

  User.findByIdAndDelete(userId, (err, deletedUser) => {
    if (err) {
      res.status(500).send({ message: "Error deleting user" });
    } else {
      if (!deletedUser) {
        res.status(404).send({ message: "Couldn't delete user" });
      } else {
        res.status(200).send({ user: deletedUser });
      }
    }
  });
}

module.exports = {
  test,
  saveUser,
  seeUser,
  seeAllUsers,
  updateUser,
  deleteUser,
};
