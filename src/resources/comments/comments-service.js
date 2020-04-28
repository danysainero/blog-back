const CommentsRepository = require("./comments-repository");
const OffensiveWordsIncludes = require("../../validators/offensive-words-includes");

class CommentsService {
  constructor() {}

  async getAllComments() {
    try {
      const allComments = await CommentsRepository.getAllComments();
      return allComments;
    } catch (err) {
      return err.message;
    }
  }

  async createComment(postId, newComment) {
    try {
      return await CommentsRepository.createComment(postId, newComment);
    } catch (err) {
      return err.message;
    }
  }

  async modifyComment(commentId, comment, user) {
    try {
      const commentToModify = await CommentsRepository.getPostById(commentId);
      if (commentToModify.user) {
        if (user.role === 0 || user._id.equals(commentToModify.user._id)) {
          return await CommentsRepository.modifyComment(commentId, comment);
        } else {
          return "No tienes permiso";
        }
      }
    } catch (err) {
      return err.message;
    }
  }

  async deleteComment(commentId, user) {
    try {
      const commentToDelete = await CommentsRepository.getPostById(commentId);

      if (commentToDelete.user) {
        if (user.role === 0 || user._id.equals(commentToDelete.user._id)) {
          const deletedPost = await CommentsRepository.deleteComment(commentId);
          return deletedPost;
        } else {
          return "No tienes permiso";
        }
      }
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = new CommentsService();
