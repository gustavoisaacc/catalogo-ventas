const { Router } = require("express");
const { Products } = require("../controllers/produc.controller");
const { validateError } = require("../middleware/validateInput");
const { createProductSchema } = require("../schemas/product.schema");

const routeProcut = Router();

routeProcut.get("/", Products.getAllProducts);
routeProcut.post(
  "/",
  validateError(createProductSchema, "body"),
  Products.create
);

module.exports = { routeProcut };
