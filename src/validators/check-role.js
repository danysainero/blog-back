class CheckRoleMiddleware {
  constructor() {}

  roleVerify(user) {
    let userRole = user.role === 0 ? 'eres admin' : 'eres publisher';
    return userRole;
  }
}

module.exports = new CheckRoleMiddleware();
