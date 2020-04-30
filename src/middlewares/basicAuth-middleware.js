const usersRepository = require("../resources/users/users-repository");

class BasicAuthMiddleware {
  constructor() {}

  async verify(userName, pass, done) {
    try {
      const user = await usersRepository.findUser(userName);

      if (!user) {
        return done(null, false, { message: "User not found" });
      }
      //meter en repository
      const validate = await user.isValidPassword(pass);

      if (!validate) {
        return done(null, false, { message: "Wrong Password" });
      }

      return done(null, user, { message: "Logged in Successfully" });
    } catch (err) {}
  }
}

module.exports = new BasicAuthMiddleware();
