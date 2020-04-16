const OffensivewordsService = require("../services/offensivewords-service");
const MyOffensivewordsService = new OffensivewordsService();

class OffensivewordsController {
  constructor() {}

//GET all offensivewords
async getAllOffensivewords() {
  const offensivewords = await MyOffensivewordsService.getAllOffensivewords();
  return offensivewords;
}
  

//Add a Offensiveword
async createOffensiveword(newOffensiveword) {
  const myNewOffensiveword = await MyOffensivewordsService.createOffensiveword(newOffensiveword);
  return myNewOffensiveword;
}

//Modify a Offensiveword
async modifyOffensiveword(offensivewordId, offensiveword) {
  const modifiedOffensiveword = await MyOffensivewordsService.modifyOffensiveword(offensivewordId, offensiveword);
  return modifiedOffensiveword;
}

//Delete a Offensiveword
async deleteOffensiveword(offensivewordId) {
  const deletedOffensiveword = await MyOffensivewordsService.deleteOffensiveword(offensivewordId);
  return deletedOffensiveword;
}

};

module.exports = OffensivewordsController;


