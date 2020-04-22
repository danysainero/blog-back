const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      index: { unique: true }
    },
    pass: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      required: true,
      default: 1
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("user", UserSchema, 'user');
