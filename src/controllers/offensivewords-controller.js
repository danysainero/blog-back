const OffensivewordsService = require('../services/offensivewords-service');

class OffensivewordsController {
  constructor() {}

  async getAllOffensivewords(req, res , next) {
    try{
    const offensivewords = await OffensivewordsService.getAllOffensivewords();
    res.json(offensivewords);}catch(err) {
      console.log(err);
      res.status(500).send(err);
  }finally {
      next();
  }
  }

  async createOffensiveword(req, res , next) {
    try{
    const newOffensiveword = await OffensivewordsService.createOffensiveword(
      req.body
    );
    res.json(newOffensiveword);}catch(err) {
      console.log(err);
      res.status(500).send(err);
  }finally {
      next();
  }
  }

  async modifyOffensiveword(req, res , next) {
    try{
    const modifiedOffensiveword = await OffensivewordsService.modifyOffensiveword(
      req.params.offensivewordId,
      req.body.word
    );
    res.json(modifiedOffensiveword);}catch(err) {
      console.log(err);
      res.status(500).send(err);
  }finally {
      next();
  }
  }

  async deleteOffensiveword(req, res , next) {
    try{
    const deletedOffensiveword = await OffensivewordsService.deleteOffensiveword(
      req.params.offensivewordId
    );
    res.json(deletedOffensiveword);}catch(err) {
      console.log(err);
      res.status(500).send(err);
  }finally {
      next();
  }
  }
}

module.exports = new OffensivewordsController();
