const commentsRouter = require('express').Router();
const commentsController = require('../resources/comments/comments-controller');
const OffensiveWordsMiddleware = require('../middlewares/offensivewords-middleware');
const passport = require('passport');
const JWTstrategy = require('passport-jwt').Strategy;
const jwtOpts = require('../middlewares/jwt-middleware').jwtOpts
const verifyToken = require('../middlewares/jwt-middleware').verifyToken

passport.use(new JWTstrategy(jwtOpts, (token, done) => verifyToken(token, done)));

commentsRouter.use(passport.initialize());

commentsRouter.get('/comments', commentsController.getAllComments);
commentsRouter.post('/comments/:postId',passport.authenticate('jwt', { session: false }), OffensiveWordsMiddleware.OffensiveWordsChecker, commentsController.createComment);
commentsRouter.put('/comments/:commentId',passport.authenticate('jwt', { session: false }), OffensiveWordsMiddleware.OffensiveWordsChecker, commentsController.modifyComment);
commentsRouter.delete('/comments/:commentId',passport.authenticate('jwt', { session: false }), commentsController.deleteComment);

module.exports = commentsRouter;