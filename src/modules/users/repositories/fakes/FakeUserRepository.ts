import { uuid } from 'uuidv4'

import User from '@modules/users/infra/typeorm/entities/User';
import IUserRepository from '@modules/users/repositories/IUserRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

class FakeUserRepository implements IUserRepository{
    private users: User[] = [];

    public async findByEmail(email: string): Promise<User | undefined> {
        const findUser = this.users.find(user => email === email);

        return findUser;
    }

    public async create({name, email, password, address_id}: ICreateUserDTO): Promise<User> {
        const user = new User();

        //Atribuir valores para user
        Object.assign(user, {id: uuid(), name, email, password, address_id});

        this.users.push(user);

        return user;
    }
}

export default FakeUserRepository;
