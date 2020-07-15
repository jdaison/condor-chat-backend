const mongoose = require('mongoose');

Schema = mongoose.Schema;

const ChatSchema = new mongoose.Schema({
  room: { type: Schema.Types.ObjectId, ref: 'Room' },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  message: String,
  createdOn: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Chat', ChatSchema);
