const schema = require('./validateWithJoi');

module.exports = {
  validateSinginApp(data) {
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

  validateCreateChat(data) {
    const value = schema.createChat.validate(data);

    if (value.error) {
      return {
        failed: true,
        status: 400,
        message: value.error.details[0].message,
      };
    }

    return data;
  },

  validateUpdateChat(data) {
    const value = schema.updateChat.validate(data);

    if (value.error) {
      return {
        failed: true,
        status: 400,
        message: value.error.details[0].message,
      };
    }

    return data;
  },

  validateCreateUser(data) {
    const value = schema.createUser.validate(data);

    if (value.error) {
      return {
        failed: true,
        status: 400,
        message: value.error.details[0].message,
      };
    }

    return data;
  },

  validateUpdateUser(data) {
    const value = schema.updateUser.validate(data);

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
