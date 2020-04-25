const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema(
  {
    postAuthorName: {
      type: String,
      required: true,
    },
    user: [{ 
      type: Schema.Types.ObjectId,
      ref: 'user'
    }],
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
      type: Schema.Types.ObjectId,
      ref: 'comments'
    }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('post', PostSchema);
