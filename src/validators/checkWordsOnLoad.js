const OffensiveWordsRepository = require('../repositories/offensiveWords-repository');

class checkWordsOnLoad {
  constructor() {}


  async checkWordsOnLoad() {
    const offensiveWords = await OffensiveWordsRepository.getAlloffensivewords();
    return Array.from(offensiveWords).length > 0
      ? 'offensiveWordsList exist'
      : this.addOffensiveWordsList();
  }

  async addOffensiveWordsList() {
    await OffensiveWordsRepository.addOffensivewordsOnLoad();
    return 'offensiveWordsList created on Load'
  }
}

module.exports = new checkWordsOnLoad();
