const express = require("express");
const router = express.Router();
const PostController = require("../controllers/posts-controller");

router.get("/posts", PostController.getAllPosts);
router.get("/posts/:id", PostController.getPostById);
router.post("/posts", PostController.createPost);
router.put("/posts", PostController.modifyPost);
router.delete("/posts/:id", PostController.deletePost);

module.exports = router;
