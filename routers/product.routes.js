const { Router } = require("express");
const { Products } = require("../controllers/produc.controller");

const routeProcut = Router();

routeProcut.get("/", Products.getAllProducts);

module.exports = { routeProcut };
