const OffensiveWordsRepository = require("../repositories/offensiveWords-repository");

class OffensiveWordsIncludes {
  constructor() {}

  async  checkWordsOnComment(comment) {
    let notAllowedOffensiveWords = [];

    const offensiveWordsList = await this.getAllOffensiveWords();

    offensiveWordsList.forEach((word) => {
      const isWordIncluded = new RegExp("\\b" + word.word + "\\b").test(comment.toLowerCase());

      if (isWordIncluded) {notAllowedOffensiveWords = [...notAllowedOffensiveWords, word];}
    });
    return notAllowedOffensiveWords;
   }

   
  getAllOffensiveWords(){
      return OffensiveWordsRepository.getAlloffensivewords();
  }

}

module.exports = new OffensiveWordsIncludes();