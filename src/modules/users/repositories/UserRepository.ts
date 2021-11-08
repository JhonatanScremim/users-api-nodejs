import User from '../../users/infra/typeorm/entities/User';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
class UserRepository extends Repository<User> {

    public async findByEmail(email: string): Promise<User | null> {
        const user = await this.findOne({
            where: {
                email
            }
        });

        return user || null;
    }
}

export default UserRepository;
