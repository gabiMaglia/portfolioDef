import {  DataTypes } from 'sequelize';


export default (sequelize ) => {
  sequelize.define (
    'Skills',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      type: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      img_skill: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  )
}