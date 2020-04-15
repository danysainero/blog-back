const postSchema = require("../models/post");

class CommentsRepository {
  constructor() {}

    //Add a comment from one Post by Id
    async createComment(postId, newComment) {
      
    }
    //Modify a comment from one Post by Id
    async modifyComment(postId, commentId, newComment) {
      
    }
    //Delete a comment from one Post by Id
    async deleteComment(postId, commentId) {
      
    }

}

module.exports = CommentsRepository;
