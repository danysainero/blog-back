const express = require("express");
const router = express.Router();
const MyCommentsController = require("../controllers/comments-controller");
const OffensiveWordsMiddleware = require("../middlewares/offensivewords-middleware");


router.get("/comments", MyCommentsController.getAllComments);
router.post("/comments/:postId",OffensiveWordsMiddleware.OffensiveWordsChecker, MyCommentsController.createComment);
router.put("/comments/:commentId", MyCommentsController.modifyComment);
router.delete("/comments/:commentId", MyCommentsController.deleteComment);

module.exports = router;
