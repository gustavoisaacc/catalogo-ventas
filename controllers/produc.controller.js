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
}

module.exports = { Products };
