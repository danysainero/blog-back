const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog-controller.js");
const blogControllerClass = new blogController();

// Get all posts
router.get("/posts",  async (req, res) => {
  const posts = await blogControllerClass.getAllPost();
  res.json(posts);
})

module.exports = router