const controllerUser = require('../controllers/rooms/rooms');
const { validateToken } = require('../middlewares');

module.exports = (app) => {
  app.get('/rooms', validateToken, controllerUser.getRooms);
  app.get('/rooms/:id', validateToken, controllerUser.getRoomById);
  app.post('/rooms', validateToken, controllerUser.createRoom);
  app.put('/rooms/:id', validateToken, controllerUser.updateRoomById);
  app.delete('/rooms/:id', validateToken, controllerUser.deleteRoomById);
};
