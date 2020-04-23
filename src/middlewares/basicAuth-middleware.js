const usersRepository = require("../repositories/users-repository");

class BasicAuthMiddleware {
  constructor() {}

  async verify(userName, pass, done) {
    try {
      const user = await usersRepository.findUser(userName);

      if (!user) {
        return done(null, false, { message: "User not found" });
      }

      const validate = await user.isValidPassword(pass);

      if (!validate) {
        return done(null, false, { message: "Wrong Password" });
      }

      return done(null, user, { message: "Logged in Successfully" });
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = new BasicAuthMiddleware();
