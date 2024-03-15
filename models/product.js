const boom = require("@hapi/boom");
const { sequelize } = require("../config/sequelize");

class Product {
  static async findAll() {
    const Products = await sequelize.models.Product.findAll({
      include: ["category"],
    });
    return Products;
  }
  static async findOne({ id }) {
    const user = await sequelize.models.Product.findByPk({ id });
    if (!user) throw boom.notFound("product not found");
    return user;
  }
  static async create({ data }) {
    const product = await sequelize.models.Product.create(data);
    return product;
  }
  static async update({ id, data }) {
    const product = await this.findOne({ id });
    const updatedProduct = await product.update(data);
    return updatedProduct;
  }
  static async delete({ id }) {
    const product = await this.findOne({ id });
    await product.destroy();
    return { message: `product deleted ${id}` };
  }
}

module.exports = {
  Product,
};
