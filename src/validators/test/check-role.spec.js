import checkRole from '../check-role';
import adminsList from '../../data/admins-list.json';


describe('check user´s role', ()=>{

    const user = {role: 0,
    _id: "5ea53b79b27d3c1e9423b4e6",
    userName: "admin1",
    pass: "$2b$10$LQ1YUf/Tajj6TLfuggXG5OWrbYdrYmZd2rIKS8RlbZNfM.FQjDmX." }

it('should have admin role',  () => {
        expect(checkRole.roleVerify(user)).toBe('eres admin');
    });

})