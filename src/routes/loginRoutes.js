
const loginRouter = require("express").Router();
const UsersController = require("../controllers/users-controller");
const authMiddleware = require("../middlewares/basicAuth-middleware")


/* loginRouter.post("/", authMiddleware.verify); */
loginRouter.post("/",authMiddleware.verify, UsersController.login);

module.exports = loginRouter;