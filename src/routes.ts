import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import UserRepository from './repositories/UserRepository';
import CreateUserService from './services/CreateUserSerivce';

const routes = Router();

routes.get('/users', async (request, response) => {

    const userRepository = getCustomRepository(UserRepository);
    const users = await userRepository.find();

    return response.json(users);
});

routes.post('/users', async (request, response) => {

    try{
        const { name, email } = request.body;

        const createUserService = new CreateUserService();

        const newUser = await createUserService.execute({
            name,
            email
        });

        return response.json(newUser);
    } catch (err) {
        return response.status(400).json({ error: (err as Error).message });
    }
});

export default routes;
