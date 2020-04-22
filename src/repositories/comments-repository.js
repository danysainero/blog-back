const commentSchema = require("../models/comment");
const postSchema = require("../models/post");

class CommentsRepository {
  constructor() {}

  async getAllComments() {
    try {
     const allComments = await commentSchema.find({}).exec();
     if (!allComments.length) {
      throw new Error(
        `No existen comentarios`
      );
     }
      return allComments
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }

  async createComment(postId, comment) {
    try {
      const newComment = new commentSchema(comment);
      await newComment.save();
      await postSchema.findByIdAndUpdate(postId, {$push: { comments: newComment }});
      return newComment;
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }

  async modifyComment(commentId, comment) {
    try {
      const modifiedComment = await commentSchema.findByIdAndUpdate(
        commentId,
        {
          $set: { commentContent: comment.commentContent },
        }, {new: true}
      );
      if (!modifiedComment) {
        throw new Error(
          `El comentario con ese Id no existe`
        );}
      return modifiedComment;
    } catch (err) {
      console.log(err.message);
      return err.message
    }
  }

  async deleteComment(commentId) {
    try {
      const deletedComment = await commentSchema.findByIdAndDelete(commentId);
      if (!deletedComment) {
        throw new Error(
          `El comentario con ese Id no existe`
        );
      }
      return deletedComment;
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }
}

module.exports = new CommentsRepository();
