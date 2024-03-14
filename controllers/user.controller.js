const { User } = require("../models/user");

class Users {
  static async getAllUser(req, res) {
    try {
      const users = await User.findAllUser();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({
        message: error.errors,
      });
    }
  }
  static async createUser(req, res) {
    try {
      const data = req.body;
      const newProduct = await User.create({ data });
      return res.status(201).json(newProduct);
    } catch (error) {
      return res.status(400).json({
        message: error.errors,
      });
    }
  }
  static async getOne(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findOne({ id });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(404).json({
        menssage: error.message,
      });
    }
  }
  static async updateUser(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const user = await User.update({ id, data });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(404).json({
        menssage: error.message,
      });
    }
  }
  static async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const user = await User.delete({ id });
      return res.status(200).json(user);
    } catch (error) {
      return res.status(404).json({
        menssage: error.message,
      });
    }
  }
}

module.exports = { Users };
