import {MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey} from "typeorm";

export default class AddUserAddressId1635247767032 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('users', new TableColumn({
            name: 'address_id',
            type: 'uuid',
            isNullable: false,
        }));


        //Criar chave estrangeira
        await queryRunner.createForeignKey('users', new TableForeignKey({
            name: 'AddressUser',
            columnNames: ['address_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'address',
            onDelete: 'SET NULL', //caso address seja deletado, na table users sera setado como null a column
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('users', 'AddressUser');

        await queryRunner.dropColumn('users', 'address_id');
    }

}
