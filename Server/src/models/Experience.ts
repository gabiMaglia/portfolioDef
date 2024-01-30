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
  title_exp!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  institution_exp!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  startDate_exp!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  endDate_exp!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description_exp!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  img_exp!: string;

}