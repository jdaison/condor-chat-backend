const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomName: {
    type: String,
    required: [true, 'roomName is required'],
  },
  createdOn: { type: Date, default: Date.now },
});
const Room = mongoose.model('Room', roomSchema);
module.exports = Room;
