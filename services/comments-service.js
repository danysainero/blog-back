const CommentsRepository = require("../repositories/comments-repository");
const MyCommentsRepository = new CommentsRepository();

class CommentsService {
  constructor() {}

  
  //Create a new post withOUT comments
  async createComment(postId, newComment) {
    const myNewComment = await MyCommentsRepository.createComment(postId, newComment);
    return myNewComment;
  }

}

module.exports = CommentsService;