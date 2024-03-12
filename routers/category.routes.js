const { Router } = require("express");
const { Categories } = require("../controllers/category.controller");

const routeCategory = Router();

routeCategory.get("/", Categories.getAllCategory);

module.exports = { routeCategory };
