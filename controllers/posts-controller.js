const PostService = require("../services/posts-service");

class PostsController {
  constructor() {}

  async getAllPosts(req, res) {
    const posts = await PostService.getAllPosts();
    res.json(posts);
  }

  async getPostById(req, res) {
    const post = await PostService.getPostById(req.params.id);
    res.json(post);
  }

  async createPost(req, res) {
    const newPost = await PostService.createPost(req.body);
    res.json(newPost);
  }

  async modifyPost(req, res) {
    const modifiedPost = await PostService.modifyPost(req.body);
    res.json(modifiedPost);
  }

  async deletePost(req, res) {
    const deletedPost = await PostService.deletePost(req.params.id);
    res.json(deletedPost);
  }
}

module.exports = new PostsController();

