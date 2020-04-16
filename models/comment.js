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
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", CommentSchema);

