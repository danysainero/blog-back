const offensiveWordSchema = require("../models/offensiveWord");

class OffensivewordsRepository {
  constructor() {}

  //Get all  OffensiveWords
  async getAlloffensivewords() {
    const offensivewords = await offensiveWordSchema.find({}).exec();
    return offensivewords;
  }
  //Create new OffensiveWord
  async createOffensiveword(newOffensiveword) {
    const myNewOffensiveword = await offensiveWordSchema(
      newOffensiveword
    ).save();
    return myNewOffensiveword;
  }
  //Modify an by Id
  async modifyOffensiveword(offensivewordId, offensiveword) {
    console.log(offensiveword);

    const modifiedOffensiveword = await offensiveWordSchema.findByIdAndUpdate(
      offensivewordId,
      {
        $set: { word: offensiveword },
      }
    );
    return modifiedOffensiveword;
  }
  //Delete an OffensiveWords by Id
  async deleteOffensiveword(offensivewordId) {
    const deletedOffensiveword = await offensiveWordSchema.findByIdAndDelete(
      offensivewordId
    );
    return deletedOffensiveword;
  }
}

module.exports = OffensivewordsRepository;
