import ICreateUserDTO from '../dtos/ICreateUserDTO';
import User from '../infra/typeorm/entities/User'


export default interface IUserRepository{
    findByEmail(email: string): Promise<User | undefined>;

    create(data: ICreateUserDTO): Promise<User>;
}
