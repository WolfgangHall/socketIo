var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChatSchema = mongoose.Schema({
  created: Date,
  content: String,
  username: String,
  room: String
});

var Chat = mongoose.model('Chat', ChatSchema);
module.exports = Chat;