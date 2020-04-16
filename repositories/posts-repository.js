const postSchema = require("../models/post");

class PostRepository {
  constructor() {}

  async getAllPosts() {
    return await postSchema.find({}).populate({path:'commentAuthorName'});
  }

  async getPostById(postId) {
    return await postSchema.findById(postId);
  }

  async createPost(newPost) {
    return await postSchema(newPost).save();
  }

  async modifyPost(post) {
    const { _id, postBody } = post;
    return await postSchema.findByIdAndUpdate(_id, {$set: { postContent: postBody }});
  }

  async deletePost(id) {
    return await postSchema.findByIdAndDelete(id);
  }
}

module.exports = new PostRepository();
