"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    sequelize.define('Proyect', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        title_pro: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        technologies_pro: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        description_pro: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        deployLink_pro: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        githubLink_pro: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        img1_pro: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        img2_pro: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        img3_pro: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        }
    }, {
        timestamps: false,
    });
};
