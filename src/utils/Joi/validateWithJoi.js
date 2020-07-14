const Joi = require('@hapi/joi');

module.exports = {
  room: Joi.object({
    roomName: Joi.string().min(5).max(100).required(),
  }),
};
