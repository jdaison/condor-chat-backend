'use strict';
const chatModel = require('../../../models/chat');

module.exports = {
  async getChats() {
    return await chatModel.find({});
  },

  async getChatById(id) {
    return await chatModel.findById(id);
  },

  async createChat(data) {
    const chat = new chatModel(data);
    return await chat.save(data);
  },

  async updateChatById(id, data) {
    console.log(id, data);
    return await chatModel.findByIdAndUpdate(id, data);
  },

  async deleteChatById(id) {
    return await chatModel.findByIdAndDelete(id);
  },
};
