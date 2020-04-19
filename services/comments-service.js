const CommentsRepository = require("../repositories/comments-repository");
const OffensiveWordsIncludes = require("../validators/offensive-words-includes");

class CommentsService {
  constructor() {}

  async getAllComments() {
    return await CommentsRepository.getAllComments();
  }

  async createComment(postId, newComment) {
    try {
      return await CommentsRepository.createComment(postId, newComment);
    } catch (err) {
      console.log(err.message);
    }
  }

  async modifyComment(commentId,comment) {
    return await CommentsRepository.modifyComment(commentId,comment);
  }

  async deleteComment(commentId) {
    return await CommentsRepository.deleteComment(commentId);
  }
}

module.exports = new CommentsService();
