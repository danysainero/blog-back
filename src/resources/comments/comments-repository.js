const commentSchema = require('./comments-schema');
const postSchema = require('../posts/posts-schema');

class CommentsRepository {
  constructor() {}

  async getAllComments() {
    try {
     const allComments = await commentSchema.find({}).populate("user").exec();
     if (!allComments.length) {
      return 'No existen comentarios'
    }
      return allComments
    } catch (err) { 
      return err.message;
    }
  }

  async getPostById(commentId){
    try {
      const comment = await commentSchema
        .findById(commentId);
        console.log(comment);
        
        if (!comment) {
          throw new Error("No existe Comentario con ese Id");
        } 
      return comment;
    } catch (err) {
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
        return `El comentario con ese Id no existe`
      }
      return modifiedComment;
    } catch (err) { 
      return err.message
    }
  }

  async deleteComment(commentId) {
    try {
      const deletedComment = await commentSchema.findByIdAndDelete({_id: commentId});
      if (!deletedComment) {
        throw new Error("No existe Comentario con ese Id");
      }
      return deletedComment;
    } catch (err) { 
      return err.message;
    }
  }
}

module.exports = new CommentsRepository();
