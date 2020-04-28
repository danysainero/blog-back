
class OffensiveWordsIncludes {
  constructor() {}

  checkWordsOnComment(comment, offensiveWordsList) {
    try {
      let notAllowedOffensiveWords = [];

      offensiveWordsList.forEach((word) => {
        const isWordIncluded = new RegExp('\\b' + word.word + '\\b').test(
          comment.toLowerCase()
        );
        if (isWordIncluded) {
          notAllowedOffensiveWords = [...notAllowedOffensiveWords, word];
        }
      });
      return notAllowedOffensiveWords;
    } catch (err) {
      return err.message;
    }
  }
}

module.exports = new OffensiveWordsIncludes();
