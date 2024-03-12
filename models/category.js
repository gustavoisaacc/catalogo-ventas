const { sequelize } = require("../config/sequelize");

class Category {
  static async findAll() {
    const categories = await sequelize.models.Category.findAll();
    return categories;
  }
  static async findOne(id) {
    return `SELECT * FROM products WHERE id = ${id}`;
  }
}

module.exports = {
  Category,
};
