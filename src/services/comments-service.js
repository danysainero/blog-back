const CommentsRepository = require("../repositories/comments-repository");
const OffensiveWordsIncludes = require("../validators/offensive-words-includes");

class CommentsService {
  constructor() {}

  async getAllComments() {
    try {
      const allComments =await CommentsRepository.getAllComments();
      return allComments;
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }

  async createComment(postId, newComment) {
    try {
      return await CommentsRepository.createComment(postId, newComment);
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }

  async modifyComment(commentId, comment) {
    try {
      return await CommentsRepository.modifyComment(commentId, comment);
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }

  async deleteComment(commentId) {
    try {
      return await CommentsRepository.deleteComment(commentId);
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }
}

module.exports = new CommentsService();
