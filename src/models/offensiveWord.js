const mongoose = require("mongoose");

const OffensiveWordSchema = new mongoose.Schema(
  {
    word: {
      type: String,
      required: true,
    },
    level: {
      type: Number,
      min: 1, 
      max: 5,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("OffensiveWords", OffensiveWordSchema);