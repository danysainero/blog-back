
class OffensiveWordsIncludes {
  constructor() {}

  async checkWordsOnComment(comment, offensiveWordsList) {
    try {
      let notAllowedOffensiveWords = [];

      offensiveWordsList.forEach((word) => {
        const isWordIncluded = new RegExp("\\b" + word.word + "\\b").test(
          comment.toLowerCase()
        );
        if (isWordIncluded) {
          notAllowedOffensiveWords = [...notAllowedOffensiveWords, word];
        }
      });
      return notAllowedOffensiveWords;
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  }
}

module.exports = new OffensiveWordsIncludes();
