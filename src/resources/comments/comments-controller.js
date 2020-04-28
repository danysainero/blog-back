const CommentsService = require("./comments-service");

class CommentsController {
  constructor() {}

  async createComment(req, res) {
    const comment = req.body;
    comment.user = req.user.id;
    const postId = req.params.postId;

    try {
      const newComment = await CommentsService.createComment(postId, comment);
      res.json(newComment);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async getAllComments(req, res) {
    try {
      const comments = await CommentsService.getAllComments();
      res.json(comments);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async modifyComment(req, res) {
    try {
      const commentId = req.params.commentId;
      const user = req.user;
      const comment = req.body;
      const modifiedComment = await CommentsService.modifyComment(
        commentId,
        comment,
        user
      );
      res.json(modifiedComment);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async deleteComment(req, res) {
    try {
      const commentId = req.params.commentId;
      const user = req.user;
      const deletedComment = await CommentsService.deleteComment(
        commentId,
        user
      );
      res.json(deletedComment);
    } catch (err) {
      res.status(500).send(err);
    }
  }
}

module.exports = new CommentsController();
