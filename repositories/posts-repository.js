const postSchema = require("../models/post");

class PostRepository {
  constructor() {}

  async getAllPosts() {
    try {
     return await postSchema.find({}).populate('comments commentContent').exec();     
      /*  return await postSchema.find({}, {comments:0}).populate('comments commentContent').exec(); */
    } catch (err) {
      console.log(err.message);
    }
  }

  async getPostById(postId) {
    try {
      return await postSchema.findById(postId).populate('comments').exec();
    } catch (err) {
      console.log(err.message);
    }
  }

  async createPost(newPost) {
    try {
      return await postSchema(newPost).save();
    } catch (err) {
      console.log(err.message);
    }
  }

  async modifyPost(post) {
    const { _id, postBody } = post;
    try {
      return await postSchema.findByIdAndUpdate(_id, {
        $set: { postContent: postBody },
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  async deletePost(id) {
    try {
      return await postSchema.findByIdAndDelete(id);
    } catch (err) {
      console.log(err.message);
    }
  }
}

module.exports = new PostRepository();
