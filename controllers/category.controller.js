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
  static async getOne(req, res) {
    try {
      const { id } = req.params;
      const category = await Category.findOne({ id });
      return res.status(200).json(category);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  static async create(req, res) {
    try {
      const data = req.body;
      const newCategory = await Category.create({ data });
      return res.status(201).json(newCategory);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  static async update(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const updateCategory = await Category.update({ id, data });
      return res.status(200).json(updateCategory);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
  static async delete(req, res) {
    try {
      const { id } = req.params;
      const deleteCategory = await Category.delete({ id });
      return res.status(200).json(deleteCategory);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = { Categories };
