const  DataTypes  = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define (
    'UserPhrases',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      main_phrase: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      phrase1: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phrase2: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      phrase3: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    },
    {
      timestamps: false,
    }
  )
}