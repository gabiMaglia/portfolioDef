"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    sequelize.define('User', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name_persona: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        surname_persona: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        dni_persona: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        telephone_persona: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        photo_url: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        }
    }, {
        timestamps: false,
    });
};
