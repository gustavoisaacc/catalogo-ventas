const { Router } = require("express");
const { Users } = require("../controllers/user.controller");
const { validateError } = require("../middleware/validateInput");
const {
  createUserSchema,
  updateUserSchema,
  getUserSchema,
} = require("../schemas/user.schema");

const routeUser = Router();

routeUser.get("/", Users.getAllUser);
routeUser.post("/", validateError(createUserSchema, "body"), Users.createUser);
routeUser.get("/:id", Users.getOne);
routeUser.patch(
  "/:id",
  validateError(getUserSchema, "params"),
  validateError(updateUserSchema, "body"),
  Users.updateUser
);
routeUser.delete(
  "/:id",
  validateError(getUserSchema, "params"),
  Users.deleteUser
);

module.exports = { routeUser };
