const offensiveWordSchema = require('./offensiveWords-schema'); 
const initOffensiveWordsList = require('../../data/offensiveWords-list.json');

class OffensivewordsRepository {
  constructor() {}

  async getAlloffensivewords() {
    try {
      const allOW = await offensiveWordSchema.find({}).exec();
      return allOW;
       } catch (err) {
      return err.message
   }
  }

  async createOffensiveword(newOffensiveword) {
    try {
      return await offensiveWordSchema(newOffensiveword).save();
       } catch (err) { 
      return err.message
   }
  }

  async modifyOffensiveword(offensivewordId, offensiveword) {
    try {
      const modifiedOffensiveWord = await offensiveWordSchema.findByIdAndUpdate(offensivewordId, {
      $set: { word: offensiveword },
      },{ new: true }
    );
    return modifiedOffensiveWord;
     } catch (err) {
       return err.message
   }
  }

  async deleteOffensiveword(offensivewordId) {
    try {
      const deletedOffensiveword = await offensiveWordSchema.findByIdAndDelete( offensivewordId );
      if (!deletedOffensiveword) {
        return `La palabra con ese Id no existe`
      }
      return deletedOffensiveword;
    
    } catch (err) {
       return err.message
   }
  }

  async addOffensivewordsOnLoad() {
    try {
     await offensiveWordSchema.insertMany(initOffensiveWordsList);
   } catch (err) {
    return err.message
   }
  } 
}

module.exports = new OffensivewordsRepository();
