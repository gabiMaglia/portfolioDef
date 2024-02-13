"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    sequelize.define('Studies', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        title_st: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        institution_st: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        startDate_st: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        endDate_st: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        description_st: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        img_st: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        }
    }, {
        timestamps: false,
    });
};
