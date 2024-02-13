"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
exports.default = (function (sequelize) {
    sequelize.define('SocialMedia', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        instagram: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        facebook: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        linkedin: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        github: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        gmail: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        }
    }, {
        timestamps: false,
    });
});
