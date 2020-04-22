const UsersRepository = require("../repositories/users-repository");

class checkAdminsOnLoad {
  constructor() {}


  async checkAdminsOnLoad() {
    const admins = await UsersRepository.getAllAdmins();
    
    Array.from(admins).length > 0
      ? "Admins exist"
      : this.addAdminsList();
  }


  async addAdminsList() {
    await UsersRepository.addAdminsOnLoad();
  }
}

module.exports = new checkAdminsOnLoad();