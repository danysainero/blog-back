const usersRepository = require("../resources/users/users-repository");

class BasicAuthMiddleware {
  constructor() {}

  async verify(username, password, done) {
    const user = await usersRepository.findUser(username);
    if (!user) {
      return done(null, false, { message: "User not found" });
    }
    
    const validate = await user.isValidPassword(password);

    if (validate) {
      return done(null, user);
    } else {
      return done(null, false, { message: "Incorrect password" });
    }
  }
}

module.exports = new BasicAuthMiddleware();
