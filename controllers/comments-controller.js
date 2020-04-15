const CommentsService = require("../services/comments-service");
const MyCommentsService = new CommentsService();

class CommentsController {
  constructor() {}


//Add a comment from one Post by Id
async createComment(newComment) {
  const myNewComment = await MyCommentsService.createComment(newComment);
  return myNewComment;
}
//Modify a comment from one Post by Id

//Delete a comment from one Post by Id

};

module.exports = CommentsController;


