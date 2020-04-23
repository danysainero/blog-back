class CheckRoleMiddleware {
  constructor() {}

  async roleChecker(req, res, next) {
    if (admin) {
      next();
    } else {
      res.status(403).json({ message: 'No estás autorizado' });
    }
  }
}

module.exports = new CheckRoleMiddleware();
