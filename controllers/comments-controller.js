const CommentsService = require("../services/comments-service");
const OffensiveWordsIncludes = require("../validators/offensive-words-includes");

class CommentsController {
  constructor() {}

  async getAllComments(req, res) {
    const comments = await CommentsService.getAllComments();
    res.json(comments);
  }

  async createComment(req, res) {
    try {
      const notAllowedWords = await OffensiveWordsIncludes.checkWordsOnComment(
        req.body.commentContent
      );

      if (!notAllowedWords.length) {
        const newComment = await CommentsService.createComment(
          req.params.postId,
          req.body
        );
        res.json(newComment);
      } else {
        const arrayNotAllowedWords = notAllowedWords.map(
          (el) => ` palabra: ${el.word} / level: ${el.level}`
        );
        throw new Error(
          `ERROR comentario contiene palabras prohibidas ===> ${arrayNotAllowedWords}`
        );
      }
    } catch (err) {
      console.log(err.message);
      res.send(err.message);
    }
  }

  async modifyComment(req, res) {
    const modifiedComment = await CommentsService.modifyComment(req.params.commentId, req.body);
    res.json(modifiedComment);
  }

  async deleteComment(req, res) {
    const deletedComment = await CommentsService.deleteComment(
      req.params.commentId
    );
    res.json(deletedComment);
  }
}

module.exports = new CommentsController();
