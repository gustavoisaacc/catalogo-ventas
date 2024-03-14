const Joi = require("joi");

const id = Joi.number().integer().positive();
const name = Joi.string().min(3).max(30);
const price = Joi.number().integer().positive().min(10);
const categoryId = Joi.number().integer().positive();
const description = Joi.string().max(500);
const image = Joi.string().uri();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  categoryId: categoryId.required(),
  description: description.required(),
  image: image,
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  categoryId: categoryId,
  description: description,
  image: image,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
