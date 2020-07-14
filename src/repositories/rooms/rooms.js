'use strict';
const roomModel = require('../../../models/rooms');

module.exports = {
  async getRooms() {
    return await roomModel.find({});
  },

  async getRoomById(id) {
    return await roomModel.findById(id);
  },

  async createRoom(data) {
    data.createdOn = new Date();
    const room = new roomModel(data);
    return await room.save(data);
  },

  async updateRoomById(id, data) {
    return await roomModel.findOneAndUpdate(id, data);
  },

  async deleteRoomById(id) {
    return await roomModel.findByIdAndDelete(id);
  },
};
