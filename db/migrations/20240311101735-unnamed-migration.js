"use strict";

const { CATEGORY_TABLE, categorySchema } = require("../models/category.model");
const { PRODUCT_TABLE, productSchema } = require("../models/product.model");
const { USER_TABLE, UserSchema } = require("../models/user.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(PRODUCT_TABLE, productSchema);
    await queryInterface.createTable(CATEGORY_TABLE, categorySchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
  },
};
