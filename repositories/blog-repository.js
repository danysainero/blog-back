const postSchema = require("../models/post")

module.exports = class BlogRepository {
    constructor () {}
    
   async getAllPost () {
      const posts = await postSchema.find(); 
      return posts;
    }
  }

