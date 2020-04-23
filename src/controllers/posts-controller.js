const PostService = require('../../src/services/posts-service');

class PostsController {
  constructor() {}

  async getAllPosts(req, res , next) {
    try{
      const posts = await PostService.getAllPosts();
      res.status(200).send(posts);
    }catch(err) {
        console.log(err);
        res.status(500).send(err);
    }finally {
        next();
    }
  }

  async getPostById(req, res , next) {
    try{
      const post = await PostService.getPostById(req.params.id);
      res.json(post);
      }catch(err) {
        console.log(err);
        res.status(500).send(err);
    }finally {
        next();
    }
  }

  async createPost(req, res , next) {
    try{
      const newPost = await PostService.createPost(req.body);
      res.json(newPost);
      }catch(err) {
        console.log(err);
        res.status(500).send(err);
    }finally {
        next();
    }
  }

  async modifyPost(req, res , next) {
    try{

      const modifiedPost = await PostService.modifyPost(req.params.id, req.body);
      res.json(modifiedPost);
      }catch(err) {
        console.log(err);
        res.status(500).send(err);
    }finally {
        next();
    }
  }

  async deletePost(req, res , next) {
    try{
      const deletedPost = await PostService.deletePost(req.params.id);
      res.json(deletedPost);
      }catch(err) {
        console.log(err);
        res.status(500).send(err);
    }finally {
        next();
    }
  }
}

module.exports = new PostsController();
