
const loginRouter = require("express").Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "secret_token"; 
//normally store this in process.env.secret
const BasicStrategy = require("passport-http").BasicStrategy;
const authMiddleware = require("../middlewares/basicAuth-middleware");
const UsersRepository = require("../resources/users/users-repository")
loginRouter.use(passport.initialize());
passport.use(new BasicStrategy(authMiddleware.verify));

loginRouter.post(
  "", passport.authenticate('basic', { session: false }),
  (req, res) => {
    try {
      const body = {userName: req.user.userName }; 
      const token = jwt.sign({ body }, SECRET_KEY);

      return res.status(200).json({ message: "Auth Passed", token });
    } catch (err) {
      console.log('err')
      res.status(500).send(err);
    }
  }
);

loginRouter.get('/:id', UsersRepository.findUser);

module.exports = loginRouter;