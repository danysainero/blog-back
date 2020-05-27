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
      const newUserResponse = await UsersRepository.createUser(newUser);
      return newUserResponse;
    } catch (err) {
      err.code === 11000 ? err.message = 'El nombre de usuario ya existe' :  err.message;
      throw new Error(err);
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
