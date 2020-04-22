const userSchema = require("../models/user");
const initAdminsList = require('../../data/admins-list.json');


class UserRepository {
  constructor() {}

  async getAllAdmins() {
    try {
      return await userSchema.find({})
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
       return err.message
      }
  }

}

module.exports = new UserRepository();
