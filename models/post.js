const mongoose = require("mongoose")

const schema = mongoose.Schema({
  title: String,
  content: String,
  comments: Array
})

module.exports = mongoose.model("Post", schema)