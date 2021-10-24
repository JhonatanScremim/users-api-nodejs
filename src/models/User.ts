import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity("users")
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
}

export default User;
