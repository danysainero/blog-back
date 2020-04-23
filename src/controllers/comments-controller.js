const CommentsService = require('../services/comments-service');
const OffensiveWordsIncludes = require('../validators/offensive-words-includes');

class CommentsController {
  constructor() {}

  async getAllComments(req, res , next) {
    const comments = await CommentsService.getAllComments();
    res.json(comments);
  }

  async createComment(req, res , next) {
    try {
      const newComment = await CommentsService.createComment(
        req.params.postId,
        req.body
      );

      res.json(newComment);
    } catch (err) {
      console.log(err.message);
      res.send(err.message);
    }
  }

  async modifyComment(req, res , next) {
    const modifiedComment = await CommentsService.modifyComment(
      req.params.commentId,
      req.body
    );
    res.json(modifiedComment);
  }

  async deleteComment(req, res , next) {
    const deletedComment = await CommentsService.deleteComment(
      req.params.commentId
    );
    res.json(deletedComment);
  }
}

module.exports = new CommentsController();
