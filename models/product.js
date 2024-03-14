const { sequelize } = require("../config/sequelize");

class Product {
  static async findAll() {
    const Products = await sequelize.models.Product.findAll();
    return Products;
  }
  static async findOne(id) {
    return `SELECT * FROM products WHERE id = ${id}`;
  }
  static async create({ data }) {
    const product = await sequelize.models.Product.create(data);
    return product;
  }
}

module.exports = {
  Product,
};
