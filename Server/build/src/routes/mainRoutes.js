"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getRoutes_1 = __importDefault(require("./getRoutes"));
const postRoutes_1 = __importDefault(require("./postRoutes"));
const updateRoutes_1 = __importDefault(require("./updateRoutes"));
const deleteRoutes_1 = __importDefault(require("./deleteRoutes"));
const mailerRoutes_1 = __importDefault(require("./mailerRoutes"));
const mainRouter = (0, express_1.Router)();
mainRouter.use('/send_email', mailerRoutes_1.default);
mainRouter.use('/get', getRoutes_1.default);
mainRouter.use('/add', postRoutes_1.default);
mainRouter.use('/edit', updateRoutes_1.default);
mainRouter.use('/delete', deleteRoutes_1.default);
exports.default = mainRouter;
