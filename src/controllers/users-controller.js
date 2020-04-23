const userService = require("../../src/services/users-service");

class UsersController {
  constructor() {}

  async getAllUsers(req, res , next) {
    try{
      const users = await userService.getAllUsers();
      res.status(200).send(users);
    }catch(err) {
        console.log(err);
        res.status(500).send(err);
    }finally {
        next();
    }
  }

  async createUser(req, res , next) {
    try{
      const newUser = await userService.createUser(req.body);
      res.json(newUser);
      }catch(err) {
        console.log(err);
        res.status(500).send(err);
    }finally {
        next();
    }
  }

  async deleteUser(req, res , next) {
    try{
      const deletedUser = await userService.deleteUser(req.params.id);
      res.json(deletedUser);
      }catch(err) {
        console.log(err);
        res.status(500).send(err);
    }finally {
        next();
    }
  } 
}

module.exports = new UsersController();
