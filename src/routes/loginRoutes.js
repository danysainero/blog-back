
const loginRouter = require("express").Router();
const UsersController = require("../controllers/users-controller");

loginRouter.post("/", UsersController.login);

module.exports = loginRouter;