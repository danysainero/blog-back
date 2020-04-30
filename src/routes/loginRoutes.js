const loginRouter = require("express").Router();
const passport = require("passport");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "secret_token"; //normally store this in process.env.secret


loginRouter.post(
  "/",
  passport.authenticate("basic", { session: false }),
  (req, res, next) => {
    try {
      const body = { _id: req.user._id, userName: req.user.userName };
      // const opts = { expiresIn: 120 }; token expires in 2min
      const token = jwt.sign({ body }, SECRET_KEY);

      return res.status(200).json({ message: "Auth Passed", token });
    } catch (err) {
      res.status(500).send(err);
    }
    next();
  }
);

module.exports = loginRouter;
