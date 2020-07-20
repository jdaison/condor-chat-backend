

const controllerUser = require('../controllers/users/users');

module.exports = (app) => {
  app.get('/users', controllerUser.getUsers);
  app.get('/users/:id', controllerUser.getUserById);
  app.post('/users', controllerUser.createUser);
  app.put('/users/:id', controllerUser.updateUserById);
  app.delete('/users/:id', controllerUser.deleteUserById);
};
