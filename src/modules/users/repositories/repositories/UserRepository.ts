import { getRepository, Repository } from 'typeorm';

import User from '../../infra/typeorm/entities/User';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

class UserRepository implements IUserRepository{

    private ormRepository: Repository<User>;

    constructor(){
        this.ormRepository = getRepository(User);
    }

    public async findByEmail(email: string): Promise<User | undefined> {
        const user = await this.ormRepository.findOne({
            where: { email }
        });

        return user;
    }

    public async create({name, email, password, address_id}: ICreateUserDTO): Promise<User> {
        const user = this.ormRepository.create({
            name,
            email,
            password,
            address_id
        });

        await this.ormRepository.save(user);

        return user;
    }
}

export default UserRepository;
