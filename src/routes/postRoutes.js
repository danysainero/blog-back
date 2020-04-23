const postRouter = require("express").Router();
const PostController = require("../controllers/posts-controller");

const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const SECRET_KEY = "SECRET_KEY" //normally store this in process.env.secret


postRouter.use(passport.initialize());

const jwtOpts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: SECRET_KEY
}

passport.use(new JwtStrategy(jwtOpts, async (payload, done) => {
    return done(null);
}) );

postRouter.get("/posts", passport.authenticate('jwt', { session: false }),PostController.getAllPosts);
postRouter.get("/posts/:id", PostController.getPostById);
postRouter.post("/posts", PostController.createPost);
postRouter.put("/posts/:id", PostController.modifyPost);
postRouter.delete("/posts/:id", PostController.deletePost); 


module.exports = postRouter;
