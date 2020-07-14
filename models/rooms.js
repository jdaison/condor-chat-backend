const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomName: {
    type: String,
    required: [true, 'roomName is required'],
  },
  createdOn: {
    type: String,
    required: [true, 'CreatedOn date is required'],
  },
});
const Room = mongoose.model('Room', roomSchema);
module.exports = Room;
