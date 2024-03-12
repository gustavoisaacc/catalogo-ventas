const { Router } = require("express");
const { Users } = require("../controllers/user.controller");

const routeUser = Router();

routeUser.get("/", Users.getAllUsers);

module.exports = { routeUser };
