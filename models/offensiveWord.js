const mongoose = require("mongoose");

const OffensiveWordSchema = new mongoose.Schema(
  {
    word: {
      type: String,
      required: true,
    },
    level: {
      type: Number,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("OffensiveWords", OffensiveWordSchema);