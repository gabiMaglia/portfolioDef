import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from "sequelize-typescript";

import UserModel from "../models/User";
import UserCredentialsModel from "../models/UserCredentials";
import UserPhrasesModel from "../models/UserPhrases";
import ExperienceModel from "../models/Experience";
import SocialModel from "../models/Social";
import SkillModel from '../models/Skills'
import StudiesModel from "../models/Studies";
import ProyectModel from '../models/Proyect'

const LOCAL_DB = process.env.LOCAL_DB

const sequelize = new Sequelize(
  LOCAL_DB || 'postgres://postgres:H4nS3l@localhost/portfolio_db',
  {
    dialect: "postgres",
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

// const {
//   User,
//   UserCredentials,
//   UserPhrases,
//   Proyect,
//   Experience,
//   Studies,
//   Skills,
//   SocialMedia
// } = sequelize.models

// User.hasOne(UserCredentials, {
//   onDelete: "CASCADE",
// });
// UserCredentials.belongsTo(User);

// User.hasOne(UserPhrases, {
//   onDelete: "CASCADE",
// });
// UserPhrases.belongsTo(User);

// User.hasMany(Experience, {
//   onDelete: "CASCADE",
// });
// Experience.belongsTo(User);

// User.hasMany(Proyect, {
//   onDelete: "CASCADE",
// });
// Proyect.belongsTo(User);

// User.hasMany(Studies, {
//   onDelete: "CASCADE",
// });
// Studies.belongsTo(User);

// User.hasMany(Skills, {
//   onDelete: "CASCADE",
// });
// Skills.belongsTo(User);

// User.hasOne(SocialMedia, {
//   onDelete: "CASCADE",
// });
// SocialMedia.belongsTo(User);


export default sequelize;