const usersRouter = require('express').Router();
const UsersController = require('../resources/users/users-controller');
const UsersRepository = require('../resources/users/users-repository');

usersRouter.get('/', UsersController.getAllUsers);
usersRouter.post('/', UsersController.createUser);
usersRouter.delete('/:id', UsersController.deleteUser); 
// usersRouter.put('/', UsersController.findUserByName);

module.exports = usersRouter;