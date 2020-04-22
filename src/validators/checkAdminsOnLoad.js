const UsersRepository = require("../repositories/users-repository");

class checkAdminsOnLoad {
  constructor() {}

  async checkAdminsOnLoad() {
    const admins = await UsersRepository.getAllAdmins();
    
    return  Array.from(admins).length > 0
      ? "Admins exist"
      : this.addAdminsList();
  }

  async addAdminsList() {
    await UsersRepository.addAdminsOnLoad();
    return "Admins created on Load"
  }
}

module.exports = new checkAdminsOnLoad();