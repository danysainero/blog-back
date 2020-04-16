const express = require("express");
const router = express.Router();
const PostController = require("../controllers/posts-controller");
const OffensivewordsController = require("../controllers/offensivewords-controller");
const CommentsController = require("../controllers/comments-controller");
const MyPostController = new PostController();
const MyCommentsController = new CommentsController();
const MyOffensivewordsController = new OffensivewordsController();

/******* POST ***********************************************************************/

// Get all posts
router.get("/posts", async (req, res) => {
  const posts = await MyPostController.getAllPosts();
  res.json(posts);
});

//Get one Post by Id WITH comments
router.get("/posts/:id", async (req, res) => {
  const postId = req.params.id;
  const post = await MyPostController.getPostById(postId);
  res.json(post);
});

//Create a new post withOUT comments
router.post("/posts", async (req, res) => {
  const resPost = await MyPostController.createPost(req.body);
  res.json(resPost);
});

//Modify one Post, but not the comments
router.put("/posts", async (req, res) => {
  const modifiedPost = await MyPostController.modifyPost(req.body);
  res.json(modifiedPost);
});

//Delete one Post by Id with its comments
router.delete("/posts/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const deletedPost = await MyPostController.deletePost(id);

  res.json(deletedPost);
});

/******* COMMENTS ***********************************************************************/

//GET all comments
router.get("/comments", async (req, res) => {
  const comments = await MyCommentsController.getAllComments();
  res.json(comments);
});
//Create a new comment
router.post("/comments/:postId", async (req, res) => {
  const postId = req.params.postId;
  const resComment = await MyCommentsController.createComment(postId, req.body);
  res.json(resComment);
});

//Modify a comment 
router.put("/comments", async (req, res) => {
  const modifiedComment = await MyCommentsController.modifyComment(req.body);
  res.json(modifiedComment);
});


//Delete a comment 
router.delete("/comments/:commentId", async (req, res) => {
  const commentId = req.params.commentId;
  const deletedComment = await MyCommentsController.deleteComment(commentId);
  res.json(deletedComment);
});

/******* OFFENSIVEWORDS ***********************************************************************/
//GET all offensivewords
router.get("/offensivewords", async (req, res) => {
  const offensivewords = await MyOffensivewordsController.getAllOffensivewords();
  res.json(offensivewords);
});

//Create a new offensiveword
router.post("/offensivewords", async (req, res) => {
  const newOffensiveword = await MyOffensivewordsController.createOffensiveword(req.body);
  res.json(newOffensiveword);
});

//Modify a offensiveword 
router.put("/offensivewords/:offensivewordId", async (req, res) => {
  const offensivewordId = req.params.offensivewordId;
  const modifiedOffensiveword = await MyOffensivewordsController.modifyOffensiveword(offensivewordId, req.body.word);
  res.json(modifiedOffensiveword);
});


//Delete a offensiveword 
router.delete("/offensivewords/:offensivewordId", async (req, res) => {
  const offensivewordId = req.params.offensivewordId;
  const deletedOffensiveword = await MyOffensivewordsController.deleteOffensiveword(offensivewordId);
  res.json(deletedOffensiveword);
});

module.exports = router;
