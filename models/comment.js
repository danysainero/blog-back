const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    commentAuthorName: {
      type: String,
      required: true,
    },
    commentContent: {
      type: String,
      required: true,
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Post"
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", CommentSchema);

