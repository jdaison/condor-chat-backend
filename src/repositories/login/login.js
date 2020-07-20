
const loginModel = require('../../../models/login');

module.exports = {
  async getByUser(user) {
    return await roomModel.findByUser(user);
  },
};
