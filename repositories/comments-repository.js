const mongoose = require("mongoose");
const commentSchema = require("../models/comment");


var Post = require("../models/post");

class CommentsRepository {
  constructor() {}

  //Add a comment from one Post by Id
  async createComment(newComment) {
    const MyPostClass = new Post();
    const myComment = new commentSchema(newComment);
    MyPostClass.comments.push(newComment);
    const myNewComment = await myComment.save();
    return myNewComment; 
  }




  //Modify a comment from one Post by Id
  async modifyComment(postId, commentId, newComment) {}
  //Delete a comment from one Post by Id
  async deleteComment(postId, commentId) {}
}

module.exports = CommentsRepository;
