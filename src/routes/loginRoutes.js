const loginRouter = require('express').Router();
const authMiddleware = require('../middlewares/basicAuth-middleware');

const passport = require('passport');
const BasicStrategy = require('passport-http').BasicStrategy;
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'secret_token'; //normally store this in process.env.secret

loginRouter.use(passport.initialize());
passport.use(new BasicStrategy(authMiddleware.verify));

loginRouter.post(
  '/',
  passport.authenticate('basic', { session: false }),
  (req, res) => {

    const body = { _id: req.user._id, userName: req.user.userName };
    // const opts = { expiresIn: 120 }; token expires in 2min
    const token = jwt.sign({ body }, SECRET_KEY);

    return res.status(200).json({ message: 'Auth Passed', token });
  }
);

module.exports = loginRouter;
