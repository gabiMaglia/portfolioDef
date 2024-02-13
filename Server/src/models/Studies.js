import {  DataTypes } from 'sequelize';


export default (sequelize ) => {
  sequelize.define (
    'Studies',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      title_st: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      institution_st: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      startDate_st: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      endDate_st: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description_st: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      img_st: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    },
    {
      timestamps: false,
    }
  )
}