
const userModel = require('../../../models/user');

module.exports = {
  async getUsers() {
    return await userModel.find({});
  },

  async getUserById(id) {
    return await userModel.findById(id);
  },

  async createUser(data) {
    const user = new userModel(data);
    return await user.save(data);
  },

  async updateUserById(id, data) {
    return await userModel.findByIdAndUpdate(id, data);
  },

  async deleteUserById(id) {
    return await userModel.findByIdAndDelete(id);
  },
};
