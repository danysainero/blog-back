const express = require("express");
const router = express.Router();
const MyCommentsController = require("../controllers/comments-controller");

router.get("/comments", MyCommentsController.getAllComments);
router.post("/comments/:postId", MyCommentsController.createComment);
router.put("/comments/:commentId", MyCommentsController.modifyComment);
router.delete("/comments/:commentId", MyCommentsController.deleteComment);

module.exports = router;
