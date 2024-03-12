const Joi = require("joi");

const id = Joi.number().integer().positive();
const name = Joi.string().min(3).max(30).unique();
const password = Joi.string();

const createUserSchema = Joi.object({
  name: name.require(),
  password: password.require(),
});

const updateUserSchema = Joi.object({
  name: name,
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
