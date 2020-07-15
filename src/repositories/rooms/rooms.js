'use strict';
const roomModel = require('../../../models/room');

module.exports = {
  async getRooms() {
    return await roomModel.find({});
  },

  async getRoomById(id) {
    return await roomModel.findById(id);
  },

  async createRoom(data) {
    const room = new roomModel(data);
    return await room.save(data);
  },

  async updateRoomById(id, data) {
    return await roomModel.findByIdAndUpdate(id, data);
  },

  async deleteRoomById(id) {
    return await roomModel.findByIdAndDelete(id);
  },
};
