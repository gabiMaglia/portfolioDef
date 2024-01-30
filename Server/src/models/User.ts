import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: false,
  tableName: 'user',
})
export class User extends Model {
  @Column({
    type: DataType.UUIDV4,
    allowNull: false,
  })
  id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name_persona!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  surname_persona!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  dni_persona!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  telephone_persona!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  photo_url!: string;
}