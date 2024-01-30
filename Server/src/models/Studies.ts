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
  title_st!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  institution_st!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  startDate_st!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  endDate_st!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description_st!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  img_st!: string;
}