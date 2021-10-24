import User from '../models/User';
import UserRepository from '../repositories/UserRepository';
import { getCustomRepository } from 'typeorm'

interface Request{
    name: string;
    email: string;
}

class CreateUserService{

    public async execute ({name, email}: Request): Promise<User | null>{
        const userRepository = getCustomRepository(UserRepository);

        const findByName = await userRepository.findByEmail(email);

        if(findByName)
            throw Error('Esse usuário já existe');

        const newUser = userRepository.create({
            name,
            email
        });

        await userRepository.save(newUser);

        return newUser;
    }
}

export default CreateUserService;
