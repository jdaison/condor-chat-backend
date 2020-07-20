

const services = require('../../services/chats/chats');

module.exports = {
  async getChats(req, res, next) {
    let response = {};
    try {
      response = await services.getChats();
      response.failed ? next(response) : res.status(200).json(response);
    } catch (err) {
      next({ status: 400, message: err });
    }
  },

  async getChat(req, res, next) {
    let response = {};
    try {
      response = await services.getChatById(req.params.id);
      response.failed ? next(response) : res.status(200).json({ data: response });
    } catch (err) {
      next({ status: 400, message: err });
    }
  },

  async getChatById(req, res, next) {
    let response = {};
    try {
      response = await services.getChatById(req.params.id);
      response.failed ? next(response) : res.status(200).json({ data: response });
    } catch (err) {
      next({ status: 400, message: err });
    }
  },

  async createChat(req, res, next) {
    let response = {};
    const { body } = req;
    try {
      response = await services.createChat(body);
      response.failed
        ? next(response)
        : res.status(201).json({ message: 'The Chat was successfully saved', data: response });
    } catch (err) {
      next({ status: 400, message: err.toString() });
    }
  },

  async updateChatById(req, res, next) {
    let response = {};
    try {
      response = await services.updateChatById(req);
      response.failed
        ? next(response)
        : res.status(201).json({ message: 'The Chat was successfully updated', data: response });
    } catch (err) {
      next({ status: 400, message: err });
    }
  },

  async deleteChatById(req, res, next) {
    let response = {};
    try {
      response = await services.deleteChatById(req.params.id);
      response.failed
        ? next(response)
        : res.status(200).json({ message: 'The Chat was successfully deleted', data: response });
    } catch (err) {
      next({ status: 400, message: err });
    }
  },
};
