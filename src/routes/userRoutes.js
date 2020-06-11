const usersRouter = require('express').Router();
const UsersController = require('../resources/users/users-controller');

usersRouter.get('/', UsersController.getAllUsers);
usersRouter.post('/', UsersController.createUser);
usersRouter.delete('/:id', UsersController.deleteUser); 
usersRouter.post('/user', UsersController.findUserByName);

module.exports = usersRouter;