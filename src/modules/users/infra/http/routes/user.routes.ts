import { Router } from 'express';

import { getRepository } from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
import CreateUserService from '@modules/users/services/CreateUserService';

const userRouter = Router();

userRouter.get('/', async (request, response) => {

    const userRepository = getRepository(User);
    const users = await userRepository.find();

    return response.json(users);
});

userRouter.post('/', async (request, response) => {

    try{
        const { name, email, password, address_id } = request.body;

        const createUserService = new CreateUserService();

        const newUser = await createUserService.execute({
            name,
            email,
            password,
            address_id,
        });

        return response.json(newUser);
    } catch (err) {
        return response.status(400).json({ error: (err as Error).message });
    }
});

export default userRouter;
