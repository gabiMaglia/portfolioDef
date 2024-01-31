

import {  DataTypes } from 'sequelize';

export default (sequelize : any) => {
  sequelize.define (
    'User',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      name_persona: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      surname_persona: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dni_persona: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      telephone_persona: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      photo_url: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    }
  )
}