const postRouter = require("express").Router();
const PostController = require("../controllers/posts-controller");

postRouter.get("/posts", PostController.getAllPosts);
postRouter.get("/posts/:id", PostController.getPostById);
postRouter.post("/posts", PostController.createPost);
postRouter.put("/posts/:id", PostController.modifyPost);
postRouter.delete("/posts/:id", PostController.deletePost); 


module.exports = postRouter;
