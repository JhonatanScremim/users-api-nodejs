import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn,
     UpdateDateColumn, ManyToMany, JoinColumn } from 'typeorm';

import Address from './Address';

@Entity('users')
class User{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column() //Não enviando nenhum parametro, ele já entende que a coluna é varchar
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;

    @Column()
    address_id: string;

    @ManyToMany(() => Address)
    @JoinColumn({name: 'addres_id'})
    address: Address;
}

export default User;
