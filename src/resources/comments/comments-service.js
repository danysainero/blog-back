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

/* const unauthorizedError = new Error('Este post no es tuyo');
                unauthorizedError.code = 401;
                throw unauthorizedError;
} catch (err) {
        res.status(err.code).send(err);
        next(err);
} */

  async createComment(postId, newComment) {
    try {
      return await CommentsRepository.createComment(postId, newComment);
    } catch (err) {
      return err.message;
    }
  }

  async modifyComment(commentId, comment, user) {
    try {
      const commentToModify = await CommentsRepository.getCommentById(commentId);
     
      if (commentToModify.user) {
        if (user.role === 0 || user._id.equals(commentToModify.user._id)) {
          return await CommentsRepository.modifyComment(commentId, comment);
        } else {
          throw new Error("No tienes permiso");
        }
      }
    } catch (err) {
      err.message ='No tienes permiso';
      throw new Error(err);
    }
  }

  async deleteComment(commentId, user) {
    try {
      const commentToDelete = await CommentsRepository.getCommentById(commentId);

      if (commentToDelete.user) {
        if (user.role === 0 || user._id.equals(commentToDelete.user._id)) {
          const deletedComment = await CommentsRepository.deleteComment(commentId);
          return deletedComment;
        } else {
          throw new Error("No tienes permiso");
        }
      }
    } catch (err) {
      err.message ='No tienes permiso';
      throw new Error(err);
    }
  }
}

module.exports = new CommentsService();
