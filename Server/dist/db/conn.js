"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = __importDefault(require("../models/User"));
const UserCredentials_1 = __importDefault(require("../models/UserCredentials"));
const UserPhrases_1 = __importDefault(require("../models/UserPhrases"));
const Experience_1 = __importDefault(require("../models/Experience"));
const Social_1 = __importDefault(require("../models/Social"));
const Skills_1 = __importDefault(require("../models/Skills"));
const Studies_1 = __importDefault(require("../models/Studies"));
const Proyect_1 = __importDefault(require("../models/Proyect"));
const LOCAL_DB = process.env.LOCAL_DB;
const sequelize = new sequelize_typescript_1.Sequelize(LOCAL_DB || 'postgres://postgres:H4nS3l@localhost/portfolio_db', {
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
const { User, UserPhrases, UserCredentials, Proyect, Experience, Studies, Skills, SocialMedia } = sequelize.models;
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
//# sourceMappingURL=conn.js.map