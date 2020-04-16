const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    postAuthorName: {
      type: String,
      required: true,
    },
    postAuthorNickName: {
      type: String,
      required: true,
    },
    postTitle: {
      type: String,
      required: true,
    },
    postContent: {
      type: String,
      required: true,
    },
    comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }]
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", PostSchema);
