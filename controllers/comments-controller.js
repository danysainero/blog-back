const CommentsService = require("../services/comments-service");
const MyCommentsService = new CommentsService();

class CommentsController {
  constructor() {}

//GET all comments
async getAllComments() {
  const comments = await MyCommentsService.getAllComments();
  return comments;
}
  

//Add a comment from one Post by Id
async createComment(postId, newComment) {
  const myNewComment = await MyCommentsService.createComment(postId, newComment);
  return myNewComment;
}

//Modify a comment from one Post by Id
async modifyComment(comment) {
  const modifiedComment = await MyCommentsService.modifyComment(comment);
  return modifiedComment;
}

//Delete a comment from one Post by Id
async deleteComment(commentId) {
  const deletedComment = await MyCommentsService.deleteComment(commentId);
  return deletedComment;
}



};

module.exports = CommentsController;


