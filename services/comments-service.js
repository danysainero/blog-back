const CommentsRepository = require("../repositories/comments-repository");

class CommentsService {
  constructor() {}

  async getAllComments() {
    return await CommentsRepository.getAllComments();
  }

  async createComment(postId, newComment) {
     return await CommentsRepository.createComment(postId, newComment);
  }

  async modifyComment(comment) {
    return await CommentsRepository.modifyComment(comment);
  }

  async deleteComment(commentId) {
    return await CommentsRepository.deleteComment(commentId);
  }
}

module.exports = new CommentsService();
