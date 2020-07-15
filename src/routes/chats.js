'use strict';

const controllerUser = require('../controllers/chats/chats');
const { validateToken } = require('../middlewares');

module.exports = (app) => {
  app.get('/chats', controllerUser.getChats);
  app.get('/chats/:id', controllerUser.getChatById);
  app.post('/chats', controllerUser.createChat);
  app.put('/chats/:id', controllerUser.updateChatById);
  app.delete('/chats/:id', controllerUser.deleteChatById);
  // app.delete('/chats/:id', [validateToken], controllerUser.deleteChat);
};
