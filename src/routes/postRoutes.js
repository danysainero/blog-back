const express = require("express");
const router = express.Router();
const PostController = require("../controllers/posts-controller");
const BasicAuthMiddleware = require('../middlewares/basicAuth-middleware')

router.get("/posts", PostController.getAllPosts);
router.get("/posts/:id", PostController.getPostById);
router.post("/posts", PostController.createPost);
router.put("/posts/:id", PostController.modifyPost);
router.delete("/posts/:id", PostController.deletePost);

module.exports = router;
