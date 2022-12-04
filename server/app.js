const express = require('express');
var user_routes = require('./routes/user');
var image_routes = require('./routes/image');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', user_routes);
app.use('/img', image_routes);

module.exports = app;