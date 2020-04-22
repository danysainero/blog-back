const OffensiveWordsRepository = require("../repositories/offensiveWords-repository");

class checkWordsOnLoad {
  constructor() {}


  async checkWordsOnLoad() {
    const offensiveWords = await OffensiveWordsRepository.getAlloffensivewords();
    this.checkOffensiveWordsList(offensiveWords);
  }

  async checkOffensiveWordsList(offensiveWords) {
    Array.from(offensiveWords).length > 0
      ? "offensiveWordsList exist"
      : this.addOffensiveWordsList();
  }

  async addOffensiveWordsList() {
    await OffensiveWordsRepository.addOffensivewordsOnLoad();
  }
}

module.exports = new checkWordsOnLoad();
