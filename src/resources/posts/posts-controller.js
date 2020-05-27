const PostService = require("./posts-service");

class PostsController {
  constructor() {}

  async getAllPosts(req, res) {
    try {
      const posts = await PostService.getAllPosts();
      res.status(200).send(posts);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async getPostById(req, res) {
    try {
      const post = await PostService.getPostById(req.params.id);
      res.json(post);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async createPost(req, res) {
    const newPost = req.body;
    newPost.user = req.user.id;

    try {
      const createdNewPost = await PostService.createPost(newPost);
      res.json(createdNewPost);
    } catch (err) {
      res.status(500).send(err);
    }
  }

  async modifyPost(req, res) { 
    const postID = req.params.id;
    const post = req.body;
    const user = req.user;
    console.log(postID, post, user);
     try {
      const modifiedPost = await PostService.modifyPost(postID, post, user);
      res.status(200).send(modifiedPost);
    } catch (err) {
      res.status(401).send(err);
      return err;
    } 
  }

  async deletePost(req, res, next) {
    const postID = req.params.id;
    const user = req.user;
    try {
      const deletedPost = await PostService.deletePost(postID, user);
      res.status(200).send(deletedPost);
    } catch (err) {
      res.status(401).send(err);
      return err;
    }
  }
}

module.exports = new PostsController();
