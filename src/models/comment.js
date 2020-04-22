const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
      type: Schema.Types.ObjectId,
      ref: 'post'
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("comments", CommentSchema);

