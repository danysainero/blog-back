const offensiveWordSchema = require("../models/offensiveWord");
const initOffensiveWordsList = require('../data/offensiveWords-list.json');

class OffensivewordsRepository {
  constructor() {}

  async getAlloffensivewords() {
    try {
      return await offensiveWordSchema.find({}).exec();
       } catch (err) {
      console.log(err);
   }
  }

  async createOffensiveword(newOffensiveword) {
    try {
      return await offensiveWordSchema(newOffensiveword).save();
       } catch (err) {
      console.log(err.message);
   }
  }

  async modifyOffensiveword(offensivewordId, offensiveword) {
    try {
      return await offensiveWordSchema.findByIdAndUpdate(offensivewordId, {
      $set: { word: offensiveword },
    });
     } catch (err) {
       console.log(err.message);
   }
  }

  async deleteOffensiveword(offensivewordId) {
    try {
      return await offensiveWordSchema.findByIdAndDelete( offensivewordId );
       } catch (err) {
       console.log(err.message);
   }
  }

  async addOffensivewordsOnLoad() {
    try {
     await offensiveWordSchema.insertMany(initOffensiveWordsList);
   } catch (err) {
    console.log(err.message);
   }
  } 
}

module.exports = new OffensivewordsRepository();
