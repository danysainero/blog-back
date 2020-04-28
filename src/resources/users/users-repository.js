const userSchema = require('./users-schema');
const initAdminsList = require('../../data/admins-list.json');

class UserRepository {
  constructor() {}

  async findUser(userName) {
    try {
      const user = await userSchema.findOne({ userName: userName }, { __v: 0, createdAt: 0, updatedAt: 0});   
      return user;
    } catch (err) { 
      return err.message;
    }
  }
 
  async getAllUsers() {
    try {
      const users = await userSchema.find({}, { __v: 0, createdAt: 0, updatedAt: 0 });
      return users;
    } catch (err) { 
      return err.message;
    }
  }

  async createUser(newUser) {
    try {
      const createdUser = await userSchema(newUser).save();
      return createdUser;
    } catch (err) {
      err.code === 11000 ? err.message = 'El nombre de usuario ya existe' :  err.message;      
      return err.message;
    }
  }

  async deleteUser(userId) {
    try {
      const deletedUser = await userSchema.findByIdAndDelete(userId);
      return deletedUser;
    } catch (err) { 
      return err.message;
    }
  }

  async getAllAdmins() {
    try {
      return await userSchema.find({});
    } catch (err) { 
      return err.message;
    }
  }
}

module.exports = new UserRepository();
