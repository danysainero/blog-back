const OffensiveWordsIncludes = require('../validators/offensive-words-includes');
const OffensivewordsRepository = require('../resources/offensiveWords/offensiveWords-repository');

class OffensiveWordsMiddleware {
  constructor() {}

  async OffensiveWordsChecker(req, res, next) {
     
      
    const comment = req.body;

    const offensivewordsDB = await OffensivewordsRepository.getAlloffensivewords();

    const offensivewords = offensivewordsDB.map(offensivewordsdb => {
        return { word: offensivewordsdb.word, level: offensivewordsdb.level }
    });
    const offensivewordsFound = await OffensiveWordsIncludes.checkWordsOnComment(comment.commentContent, offensivewords);
    
   if (offensivewordsFound.length === 0) {
        next();
    }else{
        const info = offensivewordsFound.map(offensiveword => offensiveword.word + ' con nivel ' + offensiveword.level);
        res.status(403).json({message: 'No puedes utilizar: ' + info});
    } 
}

}

module.exports = new OffensiveWordsMiddleware();