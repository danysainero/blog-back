import checkRole from '../check-role';
import adminsList from '../../data/admins-list.json';


describe('check user´s role', ()=>{

it('should have admin role', async () => {
    
const offensiveWordsChecker = await offensiveWordsIncludes.checkWordsOnComment(comment, offensiveWordsList);

    expect(offensiveWordsChecker.length).toBeGreaterThan(0);
});

/* it('shouldn´t have admin role', async () => {
    const comment = 'Esto es un comentario';
    
    const offensiveWordsChecker = await offensiveWordsIncludes.checkWordsOnComment(comment, offensiveWordsList);
    
        expect(offensiveWordsChecker.length).toBe(0);
    }); */

})