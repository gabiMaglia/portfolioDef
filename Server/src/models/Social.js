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
      instagram: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      facebook: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      linkedin: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      github: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      gmail: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    },
    {
      timestamps: false,
    }
  )
}