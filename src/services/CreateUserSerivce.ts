import User from '../models/User';
import UserRepository from '../repositories/UserRepository';
import { getCustomRepository, getRepository } from 'typeorm'

interface Request{
    name: string;
    email: string;
    password: string;
    address_id: string;
}

class CreateUserService{

    public async execute ({name, email, password, address_id}: Request): Promise<User | null>{
        const userRepository = getRepository(User);

        const findByName = await userRepository.findOne({
            where: { email },
        });

        if(findByName)
            throw Error('Esse email já está em uso');

        const newUser = userRepository.create({
            name,
            email,
            password,
            address_id,
        });

        await userRepository.save(newUser);

        return newUser;
    }
}

export default CreateUserService;
