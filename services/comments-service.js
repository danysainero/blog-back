const CommentsRepository = require("../repositories/comments-repository");
const MyCommentsRepository = new CommentsRepository();

class CommentsService {
  constructor() {}

  //GET all comments
  async getAllComments(){
    const comments = await MyCommentsRepository.getAllComments();
    return comments;
  }

  //Create a new comment
  async createComment(postId, newComment) {
    const myNewComment = await MyCommentsRepository.createComment(postId, newComment);
    return myNewComment;
  }

   //Modify a comment from one Post by Id
   async modifyComment(comment) {
    const modifiedComment = await MyCommentsRepository.modifyComment(comment);
    return modifiedComment;
   }

  //Delete a comment from one Post by Id
async deleteComment(commentId) {
  const deletedComment = await MyCommentsRepository.deleteComment(commentId);
  return deletedComment;
}

}

module.exports = CommentsService;