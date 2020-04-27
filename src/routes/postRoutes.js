const postRouter = require('express').Router();
const PostController = require('../resources/posts/posts-controller');
const passport = require('passport');
const JWTstrategy = require('passport-jwt').Strategy;
const jwtOpts = require('../middlewares/jwt-middleware').jwtOpts
const verifyToken = require('../middlewares/jwt-middleware').verifyToken



passport.use(new JWTstrategy(jwtOpts, (token, done) => verifyToken(token, done)));

postRouter.use(passport.initialize());

// middleware => passport.authenticate('jwt', { session: false }),
postRouter.get('/posts',  PostController.getAllPosts); //ALL
postRouter.get('/posts/:id',PostController.getPostById);//ALL
postRouter.post('/posts', passport.authenticate('jwt', { session: false }), PostController.createPost); //User.role = 1 (publisher) with TOKEN
postRouter.put('/posts/:id', passport.authenticate('jwt', { session: false }), PostController.modifyPost);//User.role = 1 (publisher) with TOKEN only own post
postRouter.delete('/posts/:id', passport.authenticate('jwt', { session: false }), PostController.deletePost);//User.role = 1 (publisher) with TOKEN only own post

module.exports = postRouter;
