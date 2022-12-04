const express = require('express');
var api = express.Router();
var userController = require('../controllers/user');


//user requests
api.get('/all', userController.test);
api.post('/register', userController.saveUser);
api.post('/user', userController.seeUser); //get user by email
api.get('/allusers', userController.seeAllUsers);
api.put('/updateuser/:id', userController.updateUser);
api.delete('/deleteuser/:id', userController.deleteUser);

module.exports = api;