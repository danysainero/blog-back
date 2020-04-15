const mongoose = require("mongoose")

const schema = mongoose.Schema({
  postTitle: String,
  postContent: String,
  postComments: Array
})

module.exports = mongoose.model("Post", schema);