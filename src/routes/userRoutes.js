const usersRouter = require("express").Router();
const UsersController = require("../controllers/users-controller");

usersRouter.get("/", UsersController.getAllUsers);
usersRouter.post("/", UsersController.createUser);
usersRouter.delete("/:id", UsersController.deleteUser); 


module.exports = usersRouter;