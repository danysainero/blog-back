const commentsRouter = require('express').Router();
const commentsController = require('../resources/comments/comments-controller');
const OffensiveWordsMiddleware = require('../middlewares/offensivewords-middleware');


commentsRouter.get('/comments', commentsController.getAllComments);
commentsRouter.post('/comments/:postId',OffensiveWordsMiddleware.OffensiveWordsChecker, commentsController.createComment);
commentsRouter.put('/comments/:commentId', commentsController.modifyComment);
commentsRouter.delete('/comments/:commentId', commentsController.deleteComment);

module.exports = commentsRouter;