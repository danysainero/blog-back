const userSchema = require("../models/user");
const initAdminsList = require("../../data/admins-list.json");

class UserRepository {
  constructor() {}

  async login(body) {
    const { userName, pass } = body;
    try {
      const user = userSchema.findOne({ userName: userName, pass: pass }, { __v: 0, createdAt: 0, updatedAt: 0 });
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

  //POST user by Id
  async createUser(newUser) {
    try {
      const deletedUser = await userSchema(newUser).save();
      return deletedUser;
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }

  //Delete user
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

  async addAdminsOnLoad() {
    try {
      await userSchema.insertMany(initAdminsList);
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }
}

module.exports = new UserRepository();
