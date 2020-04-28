const PostsRepository = require("./posts-repository");

class PostsService {
  constructor() {}

  async getAllPosts() {
    try {
      return await PostsRepository.getAllPosts();
    } catch (err) {
      return err.message;
    }
  }

  async getPostById(postId) {
    try {
      return await PostsRepository.getPostById(postId);
    } catch (err) {
      return err.message;
    }
  }

  async createPost(newPost) {
    try {
      return await PostsRepository.createPost(newPost);
    } catch (err) {
      return err.message;
    }
  }

  async modifyPost(postID, post, user) {
    try {
      const postToModify = await PostsRepository.getPostById(postID);

      if (user.role === 0 || user._id.equals(postToModify.user._id)) {
        const modifiedPost = await PostsRepository.modifyPost(postID, post);
        return modifiedPost;
      } else {
        return "No puedes modificar Post de otras personas";
      }
    } catch (err) {
      return err.message;
    }
  }

  async deletePost(postID, user) {
    try {

      const postToDelete = await PostsRepository.getPostById(postID);

      if (user.role === 0 || user._id.equals(postToDelete.user._id)) {
        const deletedPost = await PostsRepository.deletePost(postID, postToDelete.user._id);
        return deletedPost;
      } else {
        return "No puedes modificar Post de otras personas";
      }
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = new PostsService();
