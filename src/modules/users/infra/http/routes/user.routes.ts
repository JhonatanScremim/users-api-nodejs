import { Router } from 'express';
import { getRepository } from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
import UserController from '../controllers/UserController';

const userRouter = Router();
const userController = new UserController();

userRouter.get('/', async (request, response) => {

    const userRepository = getRepository(User);
    const users = await userRepository.find();

    return response.json(users);
});

userRouter.post('/', userController.create);

export default userRouter;
