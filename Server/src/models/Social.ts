import { Table, Model, Column, DataType } from 'sequelize-typescript';

@Table({
  timestamps: false,
  tableName: 'experience',
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
  instagram!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  facebook!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  linkedin!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  github!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  gmail!: string;

}