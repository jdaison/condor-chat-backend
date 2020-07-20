const controllerUser = require('../controllers/chats/chats');
const { validateToken } = require('../middlewares');

module.exports = (app) => {
  app.get('/chats', validateToken, controllerUser.getChats);
  app.get('/chats/:id', validateToken, controllerUser.getChatById);
  app.post('/chats', validateToken, controllerUser.createChat);
  app.put('/chats/:id', validateToken, controllerUser.updateChatById);
  app.delete('/chats/:id', validateToken, controllerUser.deleteChatById);
};
