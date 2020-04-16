const PostService = require("../services/posts-service");

class PostsController {
  constructor() {}

  async getAllPosts(req, res) {
    try {
      const posts = await PostService.getAllPosts();
      res.json(posts);
    } catch (err) {
      console.error("ERROR: ", err.message);
    }
  }

  async getPostById(req, res) {
    try {
      const post = await PostService.getPostById(req.params.id);
      res.json(post);
    } catch (err) {
      console.error("ERROR: ", err.message);
    }
  }

  async createPost(req, res) {
    try {
      const newPost = await PostService.createPost(req.body);
      res.json(newPost);
    } catch (err) {
      console.error("ERROR: ", err.message);
    }
  }

  async modifyPost(req, res) {
    try {
      const modifiedPost = await PostService.modifyPost(req.body);
      res.json(modifiedPost);
    } catch (err) {
      console.error("ERROR: ", err.message);
    }
  }

  async deletePost(req, res) {
    try {
      const deletedPost = await PostService.deletePost(req.params.id);
      res.json(deletedPost);
    } catch (err) {
      console.error("ERROR: ", err.message);
    }
  }
}

module.exports = new PostsController();
