const PostsRepository = require('./posts-repository');

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

  async deletePost(postID, userID) {
    
    try {
      return await PostsRepository.deletePost(postID, userID);
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }
}

module.exports = new PostsService();
