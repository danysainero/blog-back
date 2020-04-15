const PostService = require("../services/posts-service");
const MyPostService = new PostService();

class PostsController {
  constructor() {}

  //Get all posts withOUT comments
  async getAllPosts() {
    const posts = await MyPostService.getAllPosts();
    return posts;
  }

  //Get one Post by Id WITH comments
  async getPostById(postId) {
    const post = await MyPostService.getPostById(postId);
    return post;
  }

  
  //Create a new post withOUT comments
  async createPost(newPost) {
    const myNewPost = await MyPostService.createPost(newPost);
    return myNewPost;
  }

  
  //Modify one Post, but not the comments
  async modifyPost(modifiedPost) {
    const myNewPost = await MyPostService.modifyPost(modifiedPost);
    return myNewPost;
  }
  //Delete one Post by Id with its comments
};

module.exports = PostsController;
