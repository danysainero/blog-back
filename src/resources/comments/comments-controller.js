const CommentsService = require('./comments-service');

class CommentsController {
  constructor() {}

  async createComment(req, res) {
    const comment = req.body;
    comment.user = req.user.id;
    const postId = req.params.postId
   
    try {
      const newComment = await CommentsService.createComment(postId, comment);
      res.json(newComment);
    } catch (err) {
      res.status(500).send(err);
    }
  }


  // async getAllComments(req, res) {
  //   const comments = await CommentsService.getAllComments();
  //   res.json(comments);
  // }

  
  // async modifyComment(req, res) {
  //   const modifiedComment = await CommentsService.modifyComment(
  //     req.params.commentId,
  //     req.body
  //   );
  //   res.json(modifiedComment);
  // }

  async deleteComment(req, res) {
    const commentId = req.params.commentId;
    const user = req.user;
    const deletedComment = await CommentsService.deleteComment(commentId, user);
    res.json(deletedComment);
  }
}

module.exports = new CommentsController();
