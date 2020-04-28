const postSchema = require("./posts-schema");
const commentsRepository = require('../comments/comments-repository');

class PostRepository {
  constructor() {}

  async getAllPosts() {
    try {
      const allPost = await postSchema
        .find({})
        .populate("comments")
        .populate("user");
      if (!allPost.length) {
        return "No existen Posts";
      }
      return allPost;
    } catch (err) {
      return err.message;
    }
  }

  async getPostById(postId) {
    try {
      const post = await postSchema
        .findById(postId)
        .populate("comments")
        .populate("user");
      if (!post) {
        return "No existe Post con ese Id";
      }
      return post;
    } catch (err) {
      return err.message;
    }
  }

  async createPost(newPost) {
    try {
      return await postSchema(newPost).save();
    } catch (err) {
      return err.message;
    }
  }

  async modifyPost(postID, post) {
    try {
      const modifiedPost = await postSchema.findByIdAndUpdate(
        { _id: postID },
        {
          $set: { postContent: post.postContent },
        },
        { new: true }
      );
      if (!modifiedPost) {
        return "No existe Post con ese Id";
      }
      return modifiedPost;
    } catch (err) {
      return err.message;
    }
  }

  async deletePost(postID, userID) {
    try {
      const deletedPost = await postSchema.findByIdAndDelete({ _id: postID, user: userID });
      if (deletedPost.comments.length > 0) {
       const deletedComments = await commentsRepository.deleteMany(deletedPost.comments);   
      }
      if (!deletedPost) {
        return "No existe Post con ese Id";
      }
      return deletedPost;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = new PostRepository();
