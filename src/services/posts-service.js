const PostsRepository = require("../repositories/posts-repository");

class PostsService {
  constructor() {}

  async getAllPosts() {
    try {
      return await PostsRepository.getAllPosts();
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }

  async getPostById(postId) {
    try {
      return await PostsRepository.getPostById(postId);
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }

  async createPost(newPost) {
    try {
      return await PostsRepository.createPost(newPost);
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }

  async modifyPost(postId, modifiedPost) {
    try {
      return await PostsRepository.modifyPost(postId, modifiedPost);
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }

  async deletePost(id) {
    try {
      return await PostsRepository.deletePost(id);
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }
}

module.exports = new PostsService();
