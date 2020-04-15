const postSchema = require("../models/post");


class CommentsRepository {
  constructor() {}

  //Get all posts withOUT comments
  async getAllPosts() {
    const posts = await postSchema.find({}).populate('Comments');
    return posts;
  }

  //Get one Post by Id WITH comments
  async getPostById(postId) {
    const post = await postSchema.findById(postId);
    return post;
  }

  //Create a new post withOUT comments
  async createPost(newPost) {
    const myPost = new postSchema(newPost);
    const myNewPost = await myPost.save();
    return myNewPost;
  }

  //Modify one Post, but not the comments
  async modifyPost(post) {
    const { _id, postBody } = post;
    const modifiedPost = await postSchema.findByIdAndUpdate(_id, {
      $set: { postContent: postBody },
    });
    return modifiedPost;
  }

  //Delete one Post by Id with its comments
  async deletePost(id) {
    const deletedPost = await postSchema.findByIdAndDelete(id);
    return deletedPost;
  }
}

module.exports = CommentsRepository;
