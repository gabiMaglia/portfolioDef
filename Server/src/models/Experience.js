const  DataTypes  = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    'Experience',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      title_exp: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      institution_exp: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      startDate_exp: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      endDate_exp: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description_exp: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      img_exp: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    },
    {
      timestamps: false,
    }
  )
}