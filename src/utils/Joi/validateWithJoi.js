const Joi = require('@hapi/joi');
const checkForHexRegExp = new RegExp('^[0-9a-fA-F]{24}$');

module.exports = {
  room: Joi.object({
    roomName: Joi.string().min(5).max(100).required(),
  }),
  createChat: Joi.object({
    room: Joi.string().pattern(checkForHexRegExp).required(),
    user: Joi.string().pattern(checkForHexRegExp).required(),
    message: Joi.string().min(1).max(200).required(),
  }),
  updateChat: Joi.object({
    message: Joi.string().min(1).max(200).required(),
  }),
};
