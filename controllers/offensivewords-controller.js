const OffensivewordsService = require("../services/offensivewords-service");

class OffensivewordsController {
  constructor() {}

  async getAllOffensivewords(req, res) {
    try {
      const offensivewords = await OffensivewordsService.getAllOffensivewords();
      res.json(offensivewords);
    } catch (err) {
      console.error("ERROR: ", err.message);
    }
  }

  async createOffensiveword(req, res) {
    try {
      const newOffensiveword = await OffensivewordsService.createOffensiveword(
        req.body
      );
      res.json(newOffensiveword);
    } catch (err) {
      console.error("ERROR: ", err.message);
    }
  }

  async modifyOffensiveword(req, res) {
    try {
      const modifiedOffensiveword = await OffensivewordsService.modifyOffensiveword(
        req.params.offensivewordId,
        req.body.word
      );
      res.json(modifiedOffensiveword);
    } catch (err) {
      console.error("ERROR: ", err.message);
    }
  }

  async deleteOffensiveword(req, res) {
    try {
      const deletedOffensiveword = await OffensivewordsService.deleteOffensiveword(
        req.params.offensivewordId
      );
      res.json(deletedOffensiveword);
    } catch (err) {
      console.error("ERROR: ", err.message);
    }
  }
}

module.exports = new OffensivewordsController();
