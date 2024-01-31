import {  DataTypes } from 'sequelize';

export default (sequelize : any) => {
  sequelize.define (
    'Proyect',
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      title_pro: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      technologies_pro: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description_pro: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      deployLink_pro: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      githubLink_pro: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      img1_pro: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      img2_pro: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      img3_pro: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    }, 
    {
      timestamps: false,
    }
  )
}