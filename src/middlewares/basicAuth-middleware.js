const passport = require("passport");
const BasicStrategy = require("passport-http").BasicStrategy;
const usersRepository = require("../repositories/users-repository");
class BasicAuthMiddleware {
  constructor() {}

  async verify(req, res, next) {

    const { userName , pass } = req.body;
    const user = await usersRepository.findUser(req.body); //{"role": 0, "_id": "5ea0926055cfa364a0723e5e","userName": "admin1", "pass": "1234"}
    
    if (user != null) {
      next();
    } else {
        res.status(403).json(`Login fail with ==> userName: ${userName},  pass: ${pass}`);
    }
  }
}

module.exports = new BasicAuthMiddleware();
