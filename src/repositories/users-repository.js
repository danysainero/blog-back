const userSchema = require('../models/user');
const initAdminsList = require('../../data/admins-list.json');

class UserRepository {
  constructor() {}

  async findUser(userName) {
    try {
      const user = await userSchema.findOne({ userName: userName }, { __v: 0, createdAt: 0, updatedAt: 0});   
     /*  const user = userSchema.findOne({ userName: userName, pass: pass }, { __v: 0, createdAt: 0, updatedAt: 0 });    */
      return user;
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }

  //USERS
  async getAllUsers() {
    try {
      const users = userSchema.find({}, { __v: 0, createdAt: 0, updatedAt: 0 });
      return users;
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }

  async createUser(newUser) {
    try {
      const createdUser = await userSchema(newUser).save();
      return createdUser;
    } catch (err) {
      err.code === 11000 ? err.message = 'El nombre de usuario ya existe' :  err.message;     
      console.log(err.message);
      return err.message;
    }
  }

  async deleteUser(userId) {
    try {
      const deletedUser = await userSchema.findByIdAndDelete(userId);
      return deletedUser;
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }

  //ADMINS

  async getAllAdmins() {
    try {
      return await userSchema.find({});
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }
}

module.exports = new UserRepository();
