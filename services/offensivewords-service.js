const OffensivewordsRepository = require("../repositories/offensivewords-repository");
const MyOffensivewordsRepository = new OffensivewordsRepository();

class OffensivewordsService {
  constructor() {}

  //GET all Offensiveword
  async getAllOffensivewords() {
    const offensivewords = await MyOffensivewordsRepository.getAlloffensivewords();
    return offensivewords;
  }

  //Create a new Offensiveword
  async createOffensiveword(offensivewordId, newOffensiveword) {
    const myNewOffensiveword = await MyOffensivewordsRepository.createOffensiveword(
      offensivewordId,
      newOffensiveword
    );
    return myNewOffensiveword;
  }

  //Modify a Offensiveword
  async modifyOffensiveword(offensivewordId, offensiveword) {
    const modifiedOffensiveword = await MyOffensivewordsRepository.modifyOffensiveword(
      offensivewordId,
      offensiveword
    );
    return modifiedOffensiveword;
  }

  //Delete a Offensiveword
  async deleteOffensiveword(offensivewordId) {
    const deletedOffensiveword = await MyOffensivewordsRepository.deleteOffensiveword(
      offensivewordId
    );
    return deletedOffensiveword;
  }
}

module.exports = OffensivewordsService;
