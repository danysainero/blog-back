const postRouter = require("express").Router();
const PostController = require("../resources/posts/posts-controller");
const passport = require("passport");
const JWTstrategy = require("passport-jwt").Strategy;
const jwtOpts = require("../middlewares/jwt-middleware").jwtOpts;
const verifyToken = require("../middlewares/jwt-middleware").verifyToken;

passport.use(new JWTstrategy(jwtOpts, (token, done) => {verifyToken(token, done);}));

postRouter.use(passport.initialize());

postRouter.get("/posts", PostController.getAllPosts);
postRouter.get("/posts/:id", PostController.getPostById); 
postRouter.post("/posts",passport.authenticate("jwt", { session: false }),PostController.createPost);
postRouter.put("/posts/:id",passport.authenticate("jwt", { session: false }),PostController.modifyPost);
postRouter.delete("/posts/:id",passport.authenticate("jwt", { session: false }),PostController.deletePost);

module.exports = postRouter;
