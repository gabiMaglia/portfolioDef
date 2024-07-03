const  DataTypes  = require('sequelize');

module.exports = (sequelize ) => {
  sequelize.define (
    'SocialMedia',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      url: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    },
    {
      timestamps: false,
    }
  )
}