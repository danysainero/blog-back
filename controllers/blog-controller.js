const blogRepository = require("../repositories/blog-repository");
const blogRepositoryClass = new blogRepository();

module.exports = class BlogController {
  constructor() {}

  async getAllPost() {
    const posts = await blogRepositoryClass.getAllPost();
    return posts;
  }
};

