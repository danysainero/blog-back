const offensiveWordSchema = require('./offensiveWords-schema'); 
const initOffensiveWordsList = require('../../data/offensiveWords-list.json');

class OffensivewordsRepository {
  constructor() {}

  async getAlloffensivewords() {
    try {
      return await offensiveWordSchema.find({}).exec();
       } catch (err) {
      console.log(err.message);
      return err.message
   }
  }

  async createOffensiveword(newOffensiveword) {
    try {
      return await offensiveWordSchema(newOffensiveword).save();
       } catch (err) {
      console.log(err.message);
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
       console.log(err.message);
       return err.message
   }
  }

  async deleteOffensiveword(offensivewordId) {
    try {
      const deletedOffensiveword = await offensiveWordSchema.findByIdAndDelete( offensivewordId );
      if (!deletedOffensiveword) {
        throw new Error(
          `La palabra con ese Id no existe`
        );
      }
      return deletedOffensiveword;
    
    } catch (err) {
       console.log(err.message);
       return err.message
   }
  }

  async addOffensivewordsOnLoad() {
    try {
     await offensiveWordSchema.insertMany(initOffensiveWordsList);
   } catch (err) {
    console.log(err.message);
    return err.message
   }
  } 
}

module.exports = new OffensivewordsRepository();
