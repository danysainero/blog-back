const CommentsRepository = require("./comments-repository");
const OffensiveWordsIncludes = require("../../validators/offensive-words-includes");

class CommentsService {
  constructor() {}

  // async getAllComments() {
  //   try {
  //     const allComments =await CommentsRepository.getAllComments();
  //     return allComments;
  //   } catch (err) {
  //     return err.message;
  //   }
  // }

  async createComment(postId, newComment) {
    try {
      return await CommentsRepository.createComment(postId, newComment);
    } catch (err) {
      return err.message;
    }
  }

  // async modifyComment(commentId, comment) {
  //   try {
  //     return await CommentsRepository.modifyComment(commentId, comment);
  //   } catch (err) {
  //     return err.message;
  //   }
  // }

  async deleteComment(commentId, user) {
    try {
      const commentToDelete = await CommentsRepository.getPostById(commentId);

      if (user.role === 0 || user._id.equals(commentToDelete.user._id)) {
        const deletedPost = await CommentsRepository.deleteComment(commentId);
      } else {
        return "No puedes modificar Post de otras personas";
      }

      return await CommentsRepository.deleteComment(commentId);
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = new CommentsService();
