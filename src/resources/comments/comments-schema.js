const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new mongoose.Schema(
  {
    user: { 
      type: Schema.Types.ObjectId,
      ref: 'user'
    },
    commentAuthorName: {
      type: String
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

module.exports = mongoose.model('comments', CommentSchema);

