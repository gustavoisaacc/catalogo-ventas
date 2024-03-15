const { Router } = require("express");
const { Products } = require("../controllers/produc.controller");
const { validateError } = require("../middleware/validateInput");
const {
  createProductSchema,
  getProductSchema,
  updateProductSchema,
} = require("../schemas/product.schema");

const routeProcut = Router();

routeProcut.get("/", Products.getAllProducts);
routeProcut.post(
  "/",
  validateError(createProductSchema, "body"),
  Products.create
);
routeProcut.get("/:id", Products.getOne);
routeProcut.patch(
  "/:id",
  validateError(getProductSchema, "params"),
  validateError(updateProductSchema, "body"),
  Products.update
);
routeProcut.delete(
  "/:id",
  validateError(getProductSchema, "params"),
  Products.delete
);

module.exports = { routeProcut };
