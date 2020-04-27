class CheckRoleMiddleware {
  constructor() {}

  roleVerify(user) {
    if (user.role !== 0 && user.role !== 1) {
      throw new Error(`Unauthorize`);
    }
  }
}

module.exports = new CheckRoleMiddleware();
