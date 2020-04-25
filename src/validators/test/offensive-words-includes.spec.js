import offensiveWordsIncludes from '../offensive-words-includes';
import offensiveWordsList from '../../../data/offensiveWords-list.json';


describe('validate if a comment has offensive words', ()=>{

it('should detect offensive word in the comment', async () => {
const comment = 'Esto es un puto comentario';
const offensiveWordsChecker = await offensiveWordsIncludes.checkWordsOnComment(comment, offensiveWordsList);

    expect(offensiveWordsChecker.length).toBeGreaterThan(0);
});

it('shouldn´t detect offensive word in the comment', async () => {
    const comment = 'Esto es un comentario';
    
    const offensiveWordsChecker = await offensiveWordsIncludes.checkWordsOnComment(comment, offensiveWordsList);
    
        expect(offensiveWordsChecker.length).toBe(0);
    });

})