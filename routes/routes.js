const express = require("express");
const router = express.Router();
const PostController = require("../controllers/posts-controller.js");
const MyPostController = new PostController();
const CommentsController = require("../controllers/comments-controller.js");
const MyCommentsController = new CommentsController();

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

//Create a new comment 
router.post("/comments", async (req, res) => {
 const resComment = await MyCommentsController.createComment(req.body);
  res.json(resComment);
});

//Modify a comment from one Post by Id

//Delete a comment from one Post by Id

module.exports = router;
