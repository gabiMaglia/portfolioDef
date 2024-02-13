"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/app"));
const conn_1 = __importDefault(require("./src/db/conn"));
const PORT = 3001;
conn_1.default.sync({ force: false }).then(() => {
    app_1.default.listen(PORT, () => {
        console.log(`Server listening at ${PORT}, running on ${'DEV'}_DB enviroment`);
    });
});
exports.default = app_1.default;
