const express = require("express");
const router = express.Router();
const PostController = require("../controllers/posts-controller.js");
const MyPostController = new PostController();

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

//Add a comment from one Post by Id

//Modify a comment from one Post by Id

//Delete a comment from one Post by Id

module.exports = router;
