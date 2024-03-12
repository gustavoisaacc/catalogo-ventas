const boom = require("@hapi/boom");

const validateError = (schema, property) => {
  return async (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
};

module.exports = { validateError };
