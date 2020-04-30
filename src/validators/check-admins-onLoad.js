const UsersRepository = require('../resources/users/users-repository');
const AdminsList = require('../data/admins-list.json')
class checkAdminsOnLoad {
  constructor() {}

  async checkAdminsOnLoad() {
    
    const admins = await UsersRepository.getAllAdmins();
    
    return  Array.from(admins).length > 0
      ? 'Admins exist'
      : this.addAdminsList();
  }
//sacar de aqui
  async addAdminsList() {
    await UsersRepository.createUser(AdminsList[0]);
    await UsersRepository.createUser(AdminsList[1]);
    return 'Admins created on Load'
  }
}

module.exports = new checkAdminsOnLoad();