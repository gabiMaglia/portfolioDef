"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    sequelize.define('Experience', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        title_exp: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        institution_exp: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        startDate_exp: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        endDate_exp: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        description_exp: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        img_exp: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        }
    }, {
        timestamps: false,
    });
};
//# sourceMappingURL=Experience.js.map