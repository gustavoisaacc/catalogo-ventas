const { User } = require("../models/user");

class Users {
  static async getAllUsers(req, res) {
    try {
      const user = User.findAll();
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = { Users };
