const mongoose = require('mongoose');

Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
  user: String,
  password: String,
  userName: String,
  urlImage: String,
  createdOn: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
