const UsersRepository = require('../repositories/users-repository');

class UsersService {
  constructor() {}

  async getAllUsers() {
    try {
      return await UsersRepository.getAllUsers();
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }

  async createUser(newUser) {
    try {
      return await UsersRepository.createUser(newUser);
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }

  async deleteUser(userId) {
    try {
      return await UsersRepository.deleteUser(userId);
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }

  async findUser(user) {
    try {
      return await UsersRepository.findUser(user);
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }


}

module.exports = new UsersService();
