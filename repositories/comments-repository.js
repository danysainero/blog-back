const commentSchema = require("../models/comment");
const postSchema = require("../models/post");

class CommentsRepository {
  constructor() {}

  //GET all comments
  async getAllComments() {
    const comments = await commentSchema.find({}).exec();
    return comments;
  }

  //Add a comment from one Post by Id
  async createComment(postId, newComment) {
    const myComment = new commentSchema(newComment);
    const myNewComment = await myComment.save();
    const commentAdded = await postSchema
      .findByIdAndUpdate(postId, { $push: { comments: myComment } })
      .exec();
    return commentAdded;
  }

  //Modify a comment from one Post by Id
  async modifyComment(comment) {
    
    const { _id, commentContent } = comment;
    const modifiedComment = await commentSchema.findByIdAndUpdate(_id, {
      $set: { commentContent : commentContent },
    });
    return modifiedComment;
  }

  //Delete a comment from one Post by Id
  async deleteComment(commentId) {
    const deletedComment = await commentSchema.findByIdAndDelete(commentId);
    return deletedComment;
  }
}

module.exports = new CommentsRepository();
