const PostsRepository = require("../repositories/posts-repository");
const MyPostsRepository = new PostsRepository();

class PostsService {
  constructor() {}

  //Get all posts withOUT comments
  async getAllPosts() {
    const posts = await MyPostsRepository.getAllPosts();
    return posts;
  }

  //Get one Post by Id WITH comments
  async getPostById(postId) {
    const post = await MyPostsRepository.getPostById(postId);
    return post;
  }
  //Create a new post withOUT comments
  async createPost(newPost) {
    const myNewPost = await MyPostsRepository.createPost(newPost);
    return myNewPost;
  }
  
  //Modify one Post, but not the comments
  async modifyPost(modifiedPost) {
    const myNewPost = await MyPostsRepository.modifyPost(modifiedPost);
    return myNewPost;
  }

  //Delete one Post by Id with its comments
  async deletePost(id) {
    const deletedPost = await MyPostsRepository.deletePost(id);
    return deletedPost;
  }


}

module.exports = PostsService;
