const { Router } = require("express");
const { Categories } = require("../controllers/category.controller");

const {
  createCategorySchema,
  getCategorySchema,
  updateCategorySchema,
} = require("../schemas/category.schema");
const { validateError } = require("../middleware/validateInput");

const routeCategory = Router();

routeCategory.get("/", Categories.getAllCategory);
routeCategory.get("/:id", Categories.getOne);
routeCategory.post(
  "/",
  validateError(createCategorySchema, "body"),
  Categories.create
);
routeCategory.patch(
  "/:id",
  validateError(getCategorySchema, "params"),
  validateError(updateCategorySchema, "body"),
  Categories.update
);
routeCategory.delete(
  "/:id",
  validateError(getCategorySchema, "params"),
  Categories.delete
);

module.exports = { routeCategory };
