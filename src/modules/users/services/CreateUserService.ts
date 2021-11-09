import {inject, injectable} from 'tsyringe';

import User from '@modules/users/infra/typeorm/entities/User';
import IUserRepository from '../repositories/IUserRepository';

interface IRequestDTO{
    name: string;
    email: string;
    password: string;
    address_id: string;
}

@injectable()
class CreateUserService{

    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository
    ){}


    public async execute ({name, email, password, address_id}: IRequestDTO): Promise<User | null>{

        const findByEmail = await this.userRepository.findByEmail(email);

        if(findByEmail)
            throw Error('Esse email já está em uso');

        const newUser = this.userRepository.create({
            name, email, password, address_id
        });

        return newUser;
    }
}

export default CreateUserService;
