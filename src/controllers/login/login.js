

const services = require('../../services/login/login');

module.exports = {
  async signInApp(req, res, next) {

    try {
      let response = await services.signInApp(req.body);
      response.failed ? next(response) : res.status(200).json(response);
    } catch (err) {
      next({ status: 400, message: err });
    }
  },
};
