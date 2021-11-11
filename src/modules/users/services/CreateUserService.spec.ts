import FakeUserRepository from '../repositories/fakes/FakeUserRepository';
import CreateUserService from './CreateUserService';

describe('CreateUser', () => {
    it('should be able to create a new user', async () => {
        const fakeUserRepository = new FakeUserRepository();
        const createUserService = new CreateUserService(fakeUserRepository);

        const user = await createUserService.execute({
            name: 'Teste',
            email: 'teste@gmail.com',
            password: 'senha-teste',
            address_id: '316631313'
        });

        //espero que o meu usuário tenha um id
        expect(user).toHaveProperty('id');
        //espero que o meu usuário tenha um endereço '316631313'
        expect(user?.address_id).toBe('316631313');

    });

    it('should not be able to create two users with the same email', async () =>{
        const fakeUserRepository = new FakeUserRepository();
        const createUserService = new CreateUserService(fakeUserRepository);

        const userEmail = 'teste2@gmail.com';

        await createUserService.execute({
            name: 'Teste',
            email: userEmail,
            password: 'senha-teste',
            address_id: '316631313'
        });

        //espero que a criação de um usuário seja rejeitada
        //E que o erro seja uma instancia de ERROR
        expect( createUserService.execute({
            name: 'Teste',
            email: userEmail,
            password: 'senha-teste',
            address_id: '316631313'
        })).rejects.toBeInstanceOf(Error);
    })
});

