const express = require("express");
const router = express.Router();
const UsersController = require("../controllers/users-controller");

router.get("/users", UsersController.getAllUsers);
router.post("/users", UsersController.createUser);
router.delete("/users/:id", UsersController.deleteUser); 


module.exports = router;