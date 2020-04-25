class CheckRoleMiddleware {
  constructor() {}

  async roleVerify(user) {
    if (user.role !== 0) {
      throw new Error(`No es Admin`);
    } 
  }
}

module.exports = new CheckRoleMiddleware();
