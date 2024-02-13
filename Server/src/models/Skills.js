"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
exports.default = (function (sequelize) {
    sequelize.define('Skills', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        type: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        img_skill: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        amount: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
        },
    }, {
        timestamps: false,
    });
});
