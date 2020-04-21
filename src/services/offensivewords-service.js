const OffensivewordsRepository = require("../repositories/offensivewords-repository");

class OffensivewordsService {
  constructor() {}

  async getAllOffensivewords() {
    try {
      return await OffensivewordsRepository.getAlloffensivewords();
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }

  async createOffensiveword(offensivewordId, newOffensiveword) {
    try {
      return await OffensivewordsRepository.createOffensiveword(
        offensivewordId,
        newOffensiveword
      );
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }

  async modifyOffensiveword(offensivewordId, offensiveword) {
    try {
      return await OffensivewordsRepository.modifyOffensiveword(
        offensivewordId,
        offensiveword
      );
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }

  async deleteOffensiveword(offensivewordId) {
    try {
      return await OffensivewordsRepository.deleteOffensiveword(
        offensivewordId
      );
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }
}

module.exports = new OffensivewordsService();
