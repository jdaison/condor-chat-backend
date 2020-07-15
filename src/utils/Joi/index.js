const schema = require('./validateWithJoi');

module.exports = {
  validateLogin(data) {
    const value = schema.login.validate(data);
    if (value.error) {
      return {
        failed: true,
        status: 400,
        message: value.error.details[0].message,
      };
    }

    return value;
  },

  validateRoom(data) {
    const value = schema.room.validate(data);

    if (value.error) {
      return {
        failed: true,
        status: 400,
        message: value.error.details[0].message,
      };
    }

    return data;
  },
};