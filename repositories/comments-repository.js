const commentSchema = require("../models/comment");
const postSchema = require("../models/post");

class CommentsRepository {
  constructor() {}

  async getAllComments() {
    try {
    return await commentSchema.find({}).exec();
     } catch (err) {
      console.log(err.message);
   }
  }

  async createComment(postId, newComment) {
    try {
    const myComment = new commentSchema(newComment);
    await myComment.save();
    return await postSchema
      .findByIdAndUpdate(postId, { $push: { comments: myComment } });
     } catch (err) {
      console.log(err.message);
   }
  }

  async modifyComment(comment) {
    try {
    const { _id, commentContent } = comment;
    const modifiedComment = await commentSchema.findByIdAndUpdate(_id, {
      $set: { commentContent : commentContent },
    });
    return modifiedComment;
     } catch (err) {
      console.log(err.message);
   }
  }
  async deleteComment(commentId) {
    try {
    const deletedComment = await commentSchema.findByIdAndDelete(commentId);
    return deletedComment;
     } catch (err) {
      console.log(err.message);
   }
  }
}

module.exports = new CommentsRepository();
