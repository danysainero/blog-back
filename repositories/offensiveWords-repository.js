const offensiveWordSchema = require("../models/offensiveWord");

class OffensivewordsRepository {
  constructor() {}

  async getAlloffensivewords() {
    return await offensiveWordSchema.find({}).exec();
  }

  async createOffensiveword(newOffensiveword) {
    return await offensiveWordSchema(newOffensiveword).save();
  }

  async modifyOffensiveword(offensivewordId, offensiveword) {
    return await offensiveWordSchema.findByIdAndUpdate(offensivewordId, {
      $set: { word: offensiveword },
    });
  }

  async deleteOffensiveword(offensivewordId) {
    return await offensiveWordSchema.findByIdAndDelete( offensivewordId );
  }
}

module.exports = new OffensivewordsRepository();
