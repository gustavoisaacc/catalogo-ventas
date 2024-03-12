"use strict";

const { PRODUCT_TABLE, productSchema } = require("../models/product.model");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.addColumn(
      PRODUCT_TABLE,
      "category_id",
      productSchema.categoryId
    );
  },

  async down(queryInterface) {
    await queryInterface.removeColumn(PRODUCT_TABLE, "category_id");
  },
};
