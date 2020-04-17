const OffensivewordsService = require("../services/offensivewords-service");

class OffensivewordsController {
  constructor() {}

  async getAllOffensivewords(req, res) {
    const offensivewords = await OffensivewordsService.getAllOffensivewords();
    res.json(offensivewords);
  }

  async createOffensiveword(req, res) {
    const newOffensiveword = await OffensivewordsService.createOffensiveword(
      req.body
    );
    res.json(newOffensiveword);
  }

  async modifyOffensiveword(req, res) {
    const modifiedOffensiveword = await OffensivewordsService.modifyOffensiveword(
      req.params.offensivewordId,
      req.body.word
    );
    res.json(modifiedOffensiveword);
  }

  async deleteOffensiveword(req, res) {
    const deletedOffensiveword = await OffensivewordsService.deleteOffensiveword(
      req.params.offensivewordId
    );
    res.json(deletedOffensiveword);
  }
}

module.exports = new OffensivewordsController();
