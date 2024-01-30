import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: false,
  tableName: 'userPhrases',
})
export class UserPhrases extends Model {
  @Column({
    type: DataType.UUIDV4,
    allowNull: false,
  })
  id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  main_phrase!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phrase1!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phrase2!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phrase3!: string;

}