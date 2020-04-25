const postRouter = require('express').Router();
const PostController = require('../resources/posts/posts-controller');
const passport = require('passport');
const JWTstrategy = require('passport-jwt').Strategy;
const jwtOpts = require('../middlewares/jwt-middleware').jwtOpts
const verifyToken = require('../middlewares/jwt-middleware').verifyToken



passport.use(new JWTstrategy(jwtOpts, (token, done) => verifyToken(token, done)));

postRouter.use(passport.initialize());

postRouter.get('/posts', passport.authenticate('jwt', { session: false }), PostController.getAllPosts); //ALL
postRouter.get('/posts/:id',PostController.getPostById);//ALL
postRouter.post('/posts', PostController.createPost); //User.role = 1 (publisher) with TOKEN
postRouter.put('/posts/:id', PostController.modifyPost);//User.role = 1 (publisher) with TOKEN only own post
postRouter.delete('/posts/:id', PostController.deletePost);//User.role = 1 (publisher) with TOKEN only own post

module.exports = postRouter;
