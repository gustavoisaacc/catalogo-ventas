const { sequelize } = require("../config/sequelize");

class User {
  static async findAll() {
    const users = await sequelize.models.User.findAll();
    return users;
  }
}

module.exports = { User };
