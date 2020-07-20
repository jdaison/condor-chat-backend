const controllerLogin = require('../controllers/login/login');

module.exports = (app) => {
  app.post('/login', controllerLogin.signInApp);
};
