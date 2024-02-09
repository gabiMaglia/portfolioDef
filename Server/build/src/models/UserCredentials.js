"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
exports.default = (sequelize) => {
    sequelize.define('UserCredentials', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        password: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        }
    }, {
        timestamps: false,
    });
};
//# sourceMappingURL=UserCredentials.js.map