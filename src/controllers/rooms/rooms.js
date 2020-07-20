

const services = require('../../services/rooms/rooms');

module.exports = {
  async getRooms(req, res, next) {
    let response = {};
    try {
      response = await services.getRooms();
      response.failed ? next(response) : res.status(200).json(response);
    } catch (err) {
      next({ status: 400, message: err });
    }
  },

  async getRoom(req, res, next) {
    let response = {};
    try {
      response = await services.getRoomById(req.params.id);
      response.failed ? next(response) : res.status(200).json({ data: response });
    } catch (err) {
      next({ status: 400, message: err });
    }
  },

  async getRoomById(req, res, next) {
    let response = {};
    try {
      response = await services.getRoomById(req.params.id);
      response.failed ? next(response) : res.status(200).json({ data: response });
    } catch (err) {
      next({ status: 400, message: err });
    }
  },

  async createRoom(req, res, next) {
    let response = {};
    const { body } = req;
    try {
      response = await services.createRoom(body);
      response.failed
        ? next(response)
        : res.status(201).json({ message: 'The Room was successfully saved', data: response });
    } catch (err) {
      next({ status: 400, message: err.toString() });
    }
  },

  async updateRoomById(req, res, next) {
    let response = {};
    try {
      response = await services.updateRoomById(req);
      response.failed
        ? next(response)
        : res.status(201).json({ message: 'The Room was successfully updated', data: response });
    } catch (err) {
      next({ status: 400, message: err });
    }
  },

  async deleteRoomById(req, res, next) {
    let response = {};
    try {
      response = await services.deleteRoomById(req.params.id);
      response.failed
        ? next(response)
        : res.status(200).json({ message: 'The Room was successfully deleted', data: response });
    } catch (err) {
      next({ status: 400, message: err });
    }
  },
};
