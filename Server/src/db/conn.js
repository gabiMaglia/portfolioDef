import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from "sequelize";

import UserModel from "../models/User.js";
import UserCredentialsModel from "../models/UserCredentials.js";
import UserPhrasesModel from "../models/UserPhrases.js";
import ExperienceModel from "../models/Experience.js";
import SocialModel from "../models/Social.js";
import SkillModel from '../models/Skills.js'
import StudiesModel from "../models/Studies.js";
import ProyectModel from '../models/Proyect.js'

const LOCAL_DB = process.env.LOCAL_DB

const sequelize = new Sequelize(
  LOCAL_DB || 'postgres://postgres:H4nS3l@localhost/portfolio_db',
  {
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      },
    },
    logging: false,
  });

UserModel(sequelize)
UserCredentialsModel(sequelize)
UserPhrasesModel(sequelize)
ProyectModel(sequelize)
ExperienceModel(sequelize)
StudiesModel(sequelize)
SkillModel(sequelize)
SocialModel(sequelize)

const {
  User,
  UserPhrases,
  UserCredentials,
  Proyect,
  Experience,
  Studies,
  Skills,
  SocialMedia
} = sequelize.models
User.hasOne(UserCredentials, {
  onDelete: "CASCADE",
});
UserCredentials.belongsTo(User);

User.hasOne(UserPhrases, {
  onDelete: "CASCADE",
});
UserPhrases.belongsTo(User);

User.hasMany(Experience, {
  onDelete: "CASCADE",
});
Experience.belongsTo(User);

User.hasMany(Proyect, {
  onDelete: "CASCADE",
});
Proyect.belongsTo(User);

User.hasMany(Studies, {
  onDelete: "CASCADE",
});
Studies.belongsTo(User);

User.hasMany(Skills, {
  onDelete: "CASCADE",
});
Skills.belongsTo(User);

User.hasMany(SocialMedia, {
  onDelete: "CASCADE",
});
SocialMedia.belongsTo(User);



export default sequelize;