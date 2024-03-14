const Joi = require("joi");

const id = Joi.number().integer().positive();
const username = Joi.string().min(3).max(30);
const password = Joi.string();

const createUserSchema = Joi.object({
  username: username.required(),
  password: password.required(),
});

const updateUserSchema = Joi.object({
  username: username,
  password: password,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
};
