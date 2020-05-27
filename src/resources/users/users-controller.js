const userService = require("./users-service");
const userRepository = require("./users-repository");



class UsersController {
  constructor() {}

  async getAllUsers(req, res, next) {
    try {
      const users = await userService.getAllUsers();
      res.status(200).send(users);
    } catch (err) {
      res.status(500).send(err);
    } finally {
      next();
    }
  }

  async createUser(req, res, next) {
    try {
    
      
      const newUser = await userService.createUser(req.body);
      res.status(200).send(newUser);
    } catch (err) {
      res.status(403).send(err);
      return err;
    }
  }

 /*  async findUserByName(req, res, next) {
    try {      
      const userName = await userRepository.findUser(req.body);
      res.status(200).send(newUser);
    } catch (err) {
      res.status(403).send(err);
      return err;
    }
  } */

  async deleteUser(req, res, next) {
    try {
      const deletedUser = await userService.deleteUser(req.params.id);
      res.json(deletedUser);
    } catch (err) {
      res.status(500).send(err);
    } finally {
      next();
    }
  }
}

module.exports = new UsersController();
