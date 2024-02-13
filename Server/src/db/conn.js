"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = require("dotenv");
dotenv_1.default.config();
var sequelize_typescript_1 = require("sequelize-typescript");
var User_1 = require("../models/User");
var UserCredentials_1 = require("../models/UserCredentials");
var UserPhrases_1 = require("../models/UserPhrases");
var Experience_1 = require("../models/Experience");
var Social_1 = require("../models/Social");
var Skills_1 = require("../models/Skills");
var Studies_1 = require("../models/Studies");
var Proyect_1 = require("../models/Proyect");
var LOCAL_DB = process.env.LOCAL_DB;
var sequelize = new sequelize_typescript_1.Sequelize(LOCAL_DB || 'postgres://postgres:H4nS3l@localhost/portfolio_db', {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        },
    },
    logging: false,
});
(0, User_1.default)(sequelize);
(0, UserCredentials_1.default)(sequelize);
(0, UserPhrases_1.default)(sequelize);
(0, Proyect_1.default)(sequelize);
(0, Experience_1.default)(sequelize);
(0, Studies_1.default)(sequelize);
(0, Skills_1.default)(sequelize);
(0, Social_1.default)(sequelize);
var _a = sequelize.models, User = _a.User, UserPhrases = _a.UserPhrases, UserCredentials = _a.UserCredentials, Proyect = _a.Proyect, Experience = _a.Experience, Studies = _a.Studies, Skills = _a.Skills, SocialMedia = _a.SocialMedia;
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
exports.default = sequelize;
