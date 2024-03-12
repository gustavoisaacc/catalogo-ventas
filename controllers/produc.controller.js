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
}

module.exports = { Products };
