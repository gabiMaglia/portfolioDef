"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mainRoutes_1 = __importDefault(require("./routes/mainRoutes"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const server = (0, express_1.default)();
server.use((0, cors_1.default)());
server.use((0, morgan_1.default)(':method :url :status :res[content-length] - :response-time ms'));
server.use(express_1.default.json());
server.use('/', mainRoutes_1.default);
server.use((err, _req, res, _next) => {
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});
exports.default = server;
