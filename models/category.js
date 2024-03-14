const { sequelize } = require("../config/sequelize");
const boom = require("@hapi/boom");

class Category {
  static async findAll() {
    const categories = await sequelize.models.Category.findAll();
    return categories;
  }
  static async findOne({ id }) {
    const category = await sequelize.models.Category.findByPk(id);
    if (!category) throw boom.notFound("Category not found");
    return category;
  }
  static async create({ data }) {
    const category = await sequelize.models.Category.create(data);
    return category;
  }
  static async update({ id, data }) {
    const category = await this.findOne({ id });
    const updatedCategory = await category.update(data);
    return updatedCategory;
  }
  static async delete({ id }) {
    const category = await this.findOne({ id });
    await category.destroy();
    return { message: `Category deleted ${id}` };
  }
}

module.exports = {
  Category,
};
