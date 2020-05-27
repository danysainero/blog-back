const usersRepository = require("../resources/users/users-repository");

class BasicAuthMiddleware {
  constructor() {}

  async verify(username, password, done) {  
    try {
      const user = await usersRepository.findUser(username);
      if (!user) {
        return done(null, false, { message: "User not found" });
      }
      //meter en repository
      const validate = await user.isValidPassword(password);

      if (!validate) {
        return done(null, false, { message: "Wrong Password" });
      }

      return done(null, user, { message: "Logged in Successfully" });
    } catch (err) {
      console.log('err', err)
      res.status(500).send(err);
    }
  }
}

module.exports = new BasicAuthMiddleware();
