const mainRouter = require('express').Router();
const authMiddleware = require("../middlewares/basicAuth-middleware");
const passport = require("passport");
const BasicStrategy = require("passport-http").BasicStrategy;

mainRouter.use(passport.initialize());
passport.use(new BasicStrategy(authMiddleware.verify));

mainRouter.use('/blog', require('./postRoutes'));//API Post
mainRouter.use('/blog', require('./commentRoutes')); //API Comments
mainRouter.use('/blog', require('./offensivewordRoutes')); //API Offensivewords 
mainRouter.use('/users', require('./userRoutes')); //API Users 
mainRouter.use('/login', require('./loginRoutes')); //API login

module.exports = mainRouter;