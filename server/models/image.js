'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ImageSchema = Schema({
  file: String,
  user: { type: Schema.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Image', ImageSchema);