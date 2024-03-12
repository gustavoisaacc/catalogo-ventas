const { Category, categorySchema } = require("./category.model");
const { Product, productSchema } = require("./product.model");
const { User, UserSchema } = require("./user.model");

function setupModels(sequelize) {
  Product.init(productSchema, Product.config(sequelize));
  User.init(UserSchema, User.config(sequelize));
  Category.init(categorySchema, Category.config(sequelize));

  Category.associate(sequelize.models);
  Product.associate(sequelize.models);
}

module.exports = { setupModels };
