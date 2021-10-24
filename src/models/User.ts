import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("users")
class User{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column() //Não enviando nenhum parametro, ele já entende que a coluna é varchar
    name: string;

    @Column()
    email: string;
}

export default User;
