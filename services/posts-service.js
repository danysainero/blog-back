const PostsRepository = require("../repositories/posts-repository");

class PostsService {
  constructor() {}

  async getAllPosts() {
    return await PostsRepository.getAllPosts();
  }

  async getPostById(postId) {
    return await PostsRepository.getPostById(postId);
  }
  
  async createPost(newPost) {
    return await PostsRepository.createPost(newPost);
  }
  
  async modifyPost(modifiedPost) {
    return await PostsRepository.modifyPost(modifiedPost);
  }

  async deletePost(id) {
    return await PostsRepository.deletePost(id);
  }

}

module.exports = new PostsService();
