const mongoose = require("mongoose");
const commentSchema = require("../models/comment");
const postSchema = require("../models/post");

class CommentsRepository {
  constructor() {}

  //Add a comment from one Post by Id
  async createComment(postId, newComment) {
    const myComment = new commentSchema(newComment);
    const myNewComment = await myComment.save();
    const commentAdded = await postSchema.findByIdAndUpdate(postId, { $push: { comments: myComment } }).exec();
    return commentAdded;
  }

  //Modify a comment from one Post by Id
  async modifyComment(postId, commentId, newComment) {}
  //Delete a comment from one Post by Id
  async deleteComment(postId, commentId) {}
}

module.exports = CommentsRepository;
