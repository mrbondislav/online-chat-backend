import { Model, Table, Column, DataType } from 'sequelize-typescript'

interface ChatCreationAttrs {
    name: string
    text: string;
}

@Table({ tableName: 'chat' })
export class Chat extends Model<ChatCreationAttrs> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @Column({ type: DataType.STRING, allowNull: false })
    text: string;

}