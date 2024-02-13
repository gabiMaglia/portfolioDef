const dotenv = require ('dotenv');
dotenv.config();

const { Sequelize } = require ("sequelize");

const UserModel = require ("../models/User.js");
const UserCredentialsModel = require ("../models/UserCredentials.js");
const UserPhrasesModel = require ("../models/UserPhrases.js");
const ExperienceModel = require ("../models/Experience.js");
const SocialModel = require ("../models/Social.js");
const SkillModel = require ('../models/Skills.js')
const StudiesModel = require ("../models/Studies.js");
const ProyectModel = require ('../models/Proyect.js')

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



module.exports = sequelize;