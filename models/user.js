const boom = require("@hapi/boom");
const { sequelize } = require("../config/sequelize");

class User {
  static async findAllUser() {
    const users = await sequelize.models.User.findAll();
    return users;
  }
  static async create({ data }) {
    const user = await sequelize.models.User.create(data);
    return user;
  }
  static async findOne({ id }) {
    const user = await sequelize.models.User.findByPk(id);
    if (!user) throw boom.notFound("User not found");
    return user;
  }
  static async update({ id, data }) {
    const user = await this.findOne({ id });
    const res = await user.update(data);
    return res;
  }
  static async delete({ id }) {
    const user = await this.findOne({ id });
    await user.destroy();
    return { message: `User deleted ${id}` };
  }
}

module.exports = { User };
