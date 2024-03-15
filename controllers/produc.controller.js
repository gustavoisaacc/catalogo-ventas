const { Product } = require("../models/product");

class Products {
  static async getAllProducts(req, res) {
    try {
      const products = await Product.findAll();
      return res.status(200).json(products);
    } catch (error) {
      console.log(error);
    }
  }
  static async create(req, res) {
    try {
      const data = req.body;
      const newProduct = await Product.create({ data });
      return res.status(201).json(newProduct);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  static async getOne(req, res) {
    try {
      const id = req.params.id;
      const product = await Product.findOne({ id });
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const data = req.body;
      const product = await Product.update({ id, data });
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
  static async delete(req, res) {
    try {
      const { id } = req.params;
      const product = await Product.delete({ id });
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

module.exports = { Products };
