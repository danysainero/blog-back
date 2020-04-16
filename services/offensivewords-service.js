const OffensivewordsRepository = require("../repositories/offensivewords-repository");

class OffensivewordsService {
  constructor() {}

  async getAllOffensivewords() {
    return await OffensivewordsRepository.getAlloffensivewords();
  }

  async createOffensiveword(offensivewordId, newOffensiveword) {
    return await OffensivewordsRepository.createOffensiveword(
      offensivewordId,
      newOffensiveword
    );
  }

  async modifyOffensiveword(offensivewordId, offensiveword) {
    return await OffensivewordsRepository.modifyOffensiveword(
      offensivewordId,
      offensiveword
    );
  }

  async deleteOffensiveword(offensivewordId) {
    return await OffensivewordsRepository.deleteOffensiveword(offensivewordId);
  }
}

module.exports = new OffensivewordsService();
