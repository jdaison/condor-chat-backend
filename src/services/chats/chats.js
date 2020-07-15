const repositories = require('../../repositories/chats/chats');
const validate = require('../../utils/Joi');

module.exports = {
  async getChats() {
    try {
      const response = await repositories.getChats();
      return response;
    } catch (err) {
      return { failed: true, status: 500, message: err.name };
    }
  },

  async getChatById(id) {
    try {
      let response = await repositories.getChatById(id);
      return response;
    } catch (err) {
      return { failed: true, status: 500, message: err.name };
    }
  },

  async createChat(body) {
    body = validate.validateCreateChat(body);
    if (body.failed) {
      return body;
    }
    try {
      let response = await repositories.createChat(body);
      return response;
    } catch (err) {
      return { failed: true, status: 500, message: err.name };
    }
  },

  async updateChatById(req) {
    let { body } = req;
    body = validate.validateUpdateChat(body);

    if (body.failed) {
      return body;
    }

    try {
      let response = await repositories.updateChatById(req.params.id, body);
      console.log(response);
      return response;
    } catch (err) {
      console.log(err.toString());
      return { failed: true, status: 500, message: err.name };
    }
  },

  async deleteChatById(id) {
    try {
      let response = await repositories.deleteChatById(id);
      return response;
    } catch (err) {
      return { failed: true, status: 500, message: err.name };
    }
  },
};
