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
  const newPost = {
    postTitle: "Título de nuevo post",
    postContent: "este post se ha creado mediante un POST",
    postComments: [],
  };
  const resPost = await MyPostController.createPost(newPost);
  res.json(resPost);
});

//Delete one Post by Id with its comments

//Modify one Post, but not the comments

//Add a comment from one Post by Id

//Modify a comment from one Post by Id

//Delete a comment from one Post by Id

module.exports = router;
