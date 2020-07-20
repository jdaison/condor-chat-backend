const repositories = require('../../repositories/users/users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const validate = require('../../utils/Joi');
require('dotenv').config();

module.exports = {
  async signInApp(data) {
    data = validate.validateSinginApp(data);
    if (data.failed) {
      return data;
    }
    const { user, password } = data.value;

    let response = await repositories.getUserByUser(user);

    if (!response) {
      return {
        failed: true,
        status: 404,
        message: 'Invalid username or password',
      };
    }

    try {
      if (bcrypt.compareSync(password, response.password)) {
        response["password"]="";
        delete response.password //FIXME: why this is not working??
        const token = jwt.sign({ user }, process.env.KEY_PRIVATE_JWT, {
          expiresIn: 3600 * 24, // expires in 1 dia
        });
        return { response, token };
      }
      return {
        failed: true,
        status: 404,
        message: 'Invalid username or password',
      };
    } catch (err) {
      return { failed: true, status: 500, message: err.name };
    }
  },
};
