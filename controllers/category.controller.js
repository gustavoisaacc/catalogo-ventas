const { Category } = require("../models/category");

class Categories {
  static async getAllCategory(req, res) {
    try {
      const category = await Category.findAll();
      return res.status(200).json(category);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = { Categories };
