"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    sequelize.define('UserPhrases', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        main_phrase: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        phrase1: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        phrase2: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        phrase3: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        }
    }, {
        timestamps: false,
    });
};
//# sourceMappingURL=UserPhrases.js.map