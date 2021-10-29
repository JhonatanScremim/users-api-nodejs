import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('address')
class Address{

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    street: string;

    @Column()
    number: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    country: string;

}

export default Address;
