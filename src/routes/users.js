const controllerUser = require('../controllers/users/users');
const { validateToken } = require('../middlewares');

module.exports = (app) => {
  app.get('/users', validateToken, controllerUser.getUsers);
  app.get('/users/:id', validateToken, controllerUser.getUserById);
  app.post('/users', controllerUser.createUser);
  app.put('/users/:id', validateToken, controllerUser.updateUserById);
  app.delete('/users/:id', validateToken, controllerUser.deleteUserById);
};
