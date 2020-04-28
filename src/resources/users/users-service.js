const UsersRepository = require('./users-repository');

class UsersService {
  constructor() {}

  async getAllUsers() {
    try {
      return await UsersRepository.getAllUsers();
    } catch (err) {
      return err.message;
    }
  }

  async createUser(newUser) {
    try {
      return await UsersRepository.createUser(newUser);
    } catch (err) {
      return err.message;
    }
  }

  async deleteUser(userId) {
    try {
      return await UsersRepository.deleteUser(userId);
    } catch (err) {
      return err.message;
    }
  }

  async findUser(user) {
    try {
      return await UsersRepository.findUser(user);
    } catch (err) {
      return err.message;
    }
  }


}

module.exports = new UsersService();
