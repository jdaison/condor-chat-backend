const repositories = require('../../repositories/rooms/rooms');
const validate = require('../../utils/Joi');

module.exports = {
  async getRooms() {
    try {
      const response = await repositories.getRooms();
      return response;
    } catch (err) {
      return { failed: true, status: 500, message: err.name };
    }
  },

  async getRoomById(id) {
    try {
      let response = await repositories.getRoomById(id);
      return response;
    } catch (err) {
      return { failed: true, status: 500, message: err.name };
    }
  },

  async createRoom(body) {
    body = validate.validateRoom(body);
    if (body.failed) {
      return body;
    }
    try {
      let response = await repositories.createRoom(body);
      return response;
    } catch (err) {
      return { failed: true, status: 500, message: err.name };
    }
  },

  async updateRoomById(req) {
    let { body } = req;
    body = validate.validateRoom(body);

    if (body.failed) {
      return body;
    }

    try {
      let response = await repositories.updateRoomById(req.params.id, body);
      return response;
    } catch (err) {
      return { failed: true, status: 500, message: err.name };
    }
  },

  async deleteRoomById(id) {
    try {
      let response = await repositories.deleteRoomById(id);
      return response;
    } catch (err) {
      return { failed: true, status: 500, message: err.name };
    }
  },
};
