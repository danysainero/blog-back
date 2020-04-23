const postRouter = require('express').Router();
const PostController = require('../controllers/posts-controller');
const User = require('../models/user');
const passport = require('passport');
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const SECRET_KEY = 'secret_token'; //normally store this in process.env.secret

const jwtOpts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET_KEY,
};

passport.use(
  new JWTstrategy(jwtOpts, async (token, done) => {
    try {
      const user = await User.findOne({ userName: token.body.userName }).exec();
      return done(null, user);
    } catch (error) {
      done('error en jwt middleware', error);
    }
  })
);

postRouter.use(passport.initialize());


/* postRouter.get('/posts',PostController.getAllPosts); */
postRouter.get(
  '/posts',
  passport.authenticate('jwt', { session: false }),
  PostController.getAllPosts
);
postRouter.get('/posts/:id', PostController.getPostById);
postRouter.post('/posts', PostController.createPost);
postRouter.put('/posts/:id', PostController.modifyPost);
postRouter.delete('/posts/:id', PostController.deletePost);

module.exports = postRouter;
