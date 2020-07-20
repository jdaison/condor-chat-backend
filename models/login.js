const mongoose = require('mongoose');

Schema = mongoose.Schema;

const LoginSchema = new mongoose.Schema({
  user: String,
  password: String,
  createdOn: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Login', LoginSchema);
