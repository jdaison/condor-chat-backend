const repositories = require('../../repositories/users/users');
const validate = require('../../utils/Joi');
const bcrypt = require('bcryptjs');

module.exports = {
  async getUsers() {
    try {
      const response = await repositories.getUsers();
      return response;
    } catch (err) {
      return { failed: true, status: 500, message: err.name };
    }
  },

  async getUserById(id) {
    try {
      let response = await repositories.getUserById(id);
      return response;
    } catch (err) {
      return { failed: true, status: 500, message: err.name };
    }
  },

  async createUser(body) {
    body = validate.validateCreateUser(body);
    if (body.failed) {
      return body;
    }
    try {
      body.password = bcrypt.hashSync(body.password);
      let response = await repositories.createUser(body);
      return response;
    } catch (err) {
      return { failed: true, status: 500, message: err.name };
    }
  },

  async updateUserById(req) {
    let { body } = req;
    body = validate.validateUpdateUser(body);

    if (body.failed) {
      return body;
    }

    try {
      const passworHashed = bcrypt.hashSync(body.password);
      body.password = passworHashed
      let response = await repositories.updateUserById(req.params.id, body);
      return response;
    } catch (err) {
      return { failed: true, status: 500, message: err.name };
    }
  },

  async deleteUserById(id) {
    try {
      let response = await repositories.deleteUserById(id);
      return response;
    } catch (err) {
      return { failed: true, status: 500, message: err.name };
    }
  },
};
