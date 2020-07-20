const services = require('../../services/users/users');

module.exports = {
  async getUsers(req, res, next) {
    let response = {};
    try {
      response = await services.getUsers();
      response.failed ? next(response) : res.status(200).json(response);
    } catch (err) {
      next({ status: 400, message: err });
    }
  },

  async getUser(req, res, next) {
    let response = {};
    try {
      response = await services.getUserById(req.params.id);
      response.failed ? next(response) : res.status(200).json({ data: response });
    } catch (err) {
      next({ status: 400, message: err });
    }
  },

  async getUserById(req, res, next) {
    let response = {};
    try {
      response = await services.getUserById(req.params.id);
      response.failed ? next(response) : res.status(200).json({ data: response });
    } catch (err) {
      next({ status: 400, message: err });
    }
  },

  async createUser(req, res, next) {
    let response = {};
    const { body } = req;
    try {
      response = await services.createUser(body);
      response.failed
        ? next(response)
        : res.status(201).json({ message: 'The User was successfully saved', data: response });
    } catch (err) {
      next({ status: 400, message: err.toString() });
    }
  },

  async updateUserById(req, res, next) {
    let response = {};
    try {
      response = await services.updateUserById(req);
      response.failed
        ? next(response)
        : res.status(201).json({ message: 'The User was successfully updated', data: response });
    } catch (err) {
      next({ status: 400, message: err });
    }
  },

  async deleteUserById(req, res, next) {
    let response = {};
    try {
      response = await services.deleteUserById(req.params.id);
      response.failed
        ? next(response)
        : res.status(200).json({ message: 'The User was successfully deleted', data: response });
    } catch (err) {
      next({ status: 400, message: err });
    }
  },
};
