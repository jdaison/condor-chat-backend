const Joi = require('@hapi/joi');
const passwordComplexity = require('joi-password-complexity');
const checkForHexRegExp = new RegExp('^[0-9a-fA-F]{24}$');
const complexityOptions = {
  min: 8,
  max: 30,
  lowerCase: 1,
  upperCase: 1,
  numeric: 1,
  symbol: 1,
  requirementCount: 2,
}

module.exports = {
  login: Joi.object({
    user: Joi.string().email().required(),
    password: Joi.string().min(8).max(30).required()
  }),
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
  createUser: Joi.object({
    user: Joi.string().email().required(),
    password: passwordComplexity(complexityOptions),
    userName: Joi.string().min(5).max(200).required(),
    urlImage: Joi.string().uri().required()
  }),
  updateUser: Joi.object({
    password: passwordComplexity(complexityOptions),
  }),
};
