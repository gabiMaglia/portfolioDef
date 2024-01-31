import {  DataTypes } from 'sequelize';


export default (sequelize : any) => {
  sequelize.define (
    'UserCredentials',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      password: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      }
    }
  )
}