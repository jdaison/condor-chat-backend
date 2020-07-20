

const controllerUser = require('../controllers/rooms/rooms');
const { validateToken } = require('../middlewares');

module.exports = (app) => {
  app.get('/rooms', controllerUser.getRooms);
  app.get('/rooms/:id', controllerUser.getRoomById);
  app.post('/rooms', controllerUser.createRoom);
  app.put('/rooms/:id', controllerUser.updateRoomById);
  app.delete('/rooms/:id', controllerUser.deleteRoomById);
  // app.delete('/rooms/:id', [validateToken], controllerUser.deleteRoom);
};
