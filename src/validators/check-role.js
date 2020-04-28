class CheckRoleMiddleware {
  constructor() {}

  roleVerify(user) {
    if (user.role === 0 ) {
      return 'eres admin';
    }
    if (user.role === 1 ) {
      return 'eres publisher';
    }
  }
}

module.exports = new CheckRoleMiddleware();
