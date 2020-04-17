const CommentsService = require("../services/comments-service");

class CommentsController {
  constructor() {}

  async getAllComments(req, res) {   
      const comments = await CommentsService.getAllComments();
      res.json(comments);
  }

  async createComment(req, res) {
      const newComment = await CommentsService.createComment(
        req.params.postId,
        req.body
      );
      res.json(newComment);
  }

  async modifyComment(req, res) {
      const modifiedComment = await CommentsService.modifyComment(req.body);
      res.json(modifiedComment);
  }

  async deleteComment(req, res) {
      const deletedComment = await CommentsService.deleteComment(
        req.params.commentId
      );
      res.json(deletedComment);
  }
}

module.exports = new CommentsController();
