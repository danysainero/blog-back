const postSchema = require('./posts-schema');

class PostRepository {
  constructor() {}

  async getAllPosts() {
    try {

      return await postSchema.find({}).populate('comments').populate('user');
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }

  async getPostById(postId) {
    try {
      return await postSchema.findById(postId).populate('comments').populate('user');
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }

  async createPost(newPost) {
    try {
      return await postSchema(newPost).save();
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }

  async modifyPost(postId, post) {
  
    try {
      const modifiedPost = await postSchema.findByIdAndUpdate(
        postId,
        {
          $set: { postContent: post.postContent },
        },
        { new: true }
      );
      return modifiedPost;
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }

  async deletePost(postID, userID) {
    try {
      return await postSchema.findByIdAndDelete({ _id: postID, "user" : userID });
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }
}

module.exports = new PostRepository();
